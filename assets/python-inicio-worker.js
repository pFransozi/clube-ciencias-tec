let python;
async function init() {
  try {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');
    python = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' });
    postMessage({ type: 'ready' });
  } catch { postMessage({ type: 'load-error' }); }
}
onmessage = async ({ data }) => {
  if (!python) return;
  python.globals.set('student_code', data.code);
  try {
    const raw = await python.runPythonAsync(`
import contextlib, io, json, traceback

class LimitedOutput(io.StringIO):
    def write(self, text):
        if self.tell() + len(text) > 12000:
            raise RuntimeError("output_limit")
        return super().write(text)

buffer = LimitedOutput()
result = {"output": "", "error": False}
try:
    with contextlib.redirect_stdout(buffer), contextlib.redirect_stderr(buffer):
        exec(compile(student_code, "seu_codigo", "exec"), {})
except BaseException as error:
    result["error"] = True
    line = getattr(error, "lineno", None)
    if line is None:
        frames = traceback.extract_tb(error.__traceback__)
        student_frames = [frame for frame in frames if frame.filename == "seu_codigo"]
        if student_frames:
            line = student_frames[-1].lineno
    location = ("Na linha " + str(line) + ": ") if line else ""
    if isinstance(error, NameError):
        message = "não encontrei esse nome. Confira se você criou a variável antes e escreveu o nome igual, incluindo letras maiúsculas e minúsculas. Se queria mostrar uma frase, use aspas."
    elif isinstance(error, IndentationError):
        message = "há um espaço ou recuo inesperado. Nestas atividades, comece cada instrução no início da linha."
    elif isinstance(error, SyntaxError):
        if "string" in str(error):
            message = "parece que o texto ficou sem fechar. Confira se há aspas no começo e no fim da mensagem."
        else:
            message = "o Python não entendeu a escrita. Confira as aspas, os parênteses e os sinais. Compare com o exemplo ou abra uma dica."
    elif isinstance(error, RuntimeError) and str(error) == "output_limit":
        message = "o programa mostrou texto demais. A execução foi parada; revise o código antes de tentar novamente."
    else:
        message = "não foi possível terminar. Releia a tarefa, confira a linha indicada e peça ajuda se precisar."
    result["message"] = location + message
    result["details"] = traceback.format_exc()
result["output"] = buffer.getvalue()
json.dumps(result)
`);
    postMessage({ type: 'result', result: JSON.parse(raw) });
  } catch (error) {
    postMessage({ type: 'result', result: { error: true, output: '', message: 'A execução encontrou um problema. Confira o código e tente novamente.', details: String(error) } });
  } finally { python.globals.delete('student_code'); }
};
init();
