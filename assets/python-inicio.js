const lessons = [
  {
    title: 'Mostrar mensagens',
    activities: [
      {
        id: 'mensagem-observar', kind: 'Observe e execute', title: 'Uma instrução, uma mensagem',
        intro: '<p>Programar é escrever instruções que o computador consegue executar. Vamos começar com uma: <code>print</code>, que pede ao Python para mostrar algo no resultado.</p><p>Em <code>print("Olá!")</code>, os parênteses envolvem o que será mostrado. As aspas marcam o começo e o fim do texto.</p>',
        code: 'print("Olá, Clube de Ciências!")',
        task: 'Leia o código. Depois, clique em Executar sem mudar nada.',
        prediction: 'Antes de executar: qual mensagem você espera ver?',
        reflection: 'A mensagem apareceu onde você esperava? As aspas também apareceram?',
        hints: ['Leia o que está entre as aspas.', 'O texto entre as aspas é a mensagem. print é a instrução para mostrá-la.', 'O resultado será: Olá, Clube de Ciências! As aspas delimitam o texto no código; não fazem parte da mensagem.']
      },
      {
        id: 'mensagem-alterar', kind: 'Altere uma coisa', title: 'Agora o computador mostra sua mensagem',
        intro: '<p>Vamos manter a mesma instrução e trocar apenas a mensagem. Para selecionar o texto, clique e arraste sobre ele. Preserve as aspas e os parênteses.</p>',
        code: 'print("Olá, Clube de Ciências!")',
        task: 'Troque somente o texto entre as aspas pelo nome do seu grupo. Execute novamente.',
        prediction: 'Qual parte deve mudar no resultado?',
        reflection: 'O que você mudou no código? O que precisou manter?',
        hints: ['Localize o trecho Olá, Clube de Ciências!', 'Apague apenas esse trecho e escreva o nome do grupo entre as mesmas aspas.', 'Por exemplo: print("Grupo Nuvem"). Use o nome que sua dupla escolheu.']
      },
      {
        id: 'mensagem-completar', kind: 'Complete', title: 'Uma observação sobre o céu',
        intro: '<p>O programa abaixo tem uma mensagem vazia: as duas aspas estão juntas. Clique entre elas para escrever. Use aspas retas como as do exemplo.</p>',
        code: 'print("")',
        task: 'Escreva entre as aspas uma frase sobre o céu de hoje e execute. Por exemplo: Hoje o céu está nublado.',
        prediction: 'O que aconteceria se você executasse antes de escrever a frase?',
        reflection: 'Explique para sua dupla para que servem as aspas.',
        hints: ['O texto vai entre " e ".', 'Mantenha print e os dois parênteses. Preencha somente o espaço entre as aspas.', 'Uma possibilidade é print("Hoje o céu está nublado."). Com aspas vazias, o programa mostra apenas uma linha vazia.']
      },
      {
        id: 'mensagem-ordem', kind: 'Observe e experimente', title: 'Qual mensagem aparece primeiro?',
        intro: '<p>Neste programa, o Python executa uma linha de cada vez, de cima para baixo. Cada <code>print</code> mostra uma mensagem em uma nova linha.</p>',
        code: 'print("Primeiro: observar o céu.")\nprint("Depois: registrar a observação.")',
        task: 'Execute. Depois, troque as duas linhas de posição e execute novamente.',
        prediction: 'Qual mensagem vai aparecer primeiro no código inicial?',
        reflection: 'Depois da troca, o Python seguiu a palavra “Primeiro” ou a posição das linhas?',
        hints: ['Leia a linha de cima antes da linha de baixo.', 'Troque as linhas inteiras, incluindo print, aspas e parênteses.', 'O Python segue a posição das instruções. Se a linha com “Depois” estiver no topo, essa mensagem aparecerá primeiro.']
      },
      {
        id: 'mensagem-corrigir', kind: 'Investigue um erro', title: 'Uma aspa ficou faltando',
        intro: '<p>Erros fazem parte de programar. Este exemplo tem um erro proposital. Quando o Python não entende a escrita, precisamos conferir os sinais usados.</p>',
        code: 'print("Hoje vamos observar o céu.)',
        task: 'Execute e leia a orientação. Depois, coloque a aspa que falta no fim do texto, antes do parêntese, e execute outra vez.',
        prediction: 'Você encontra a aspa de abertura? Onde deveria estar a de fechamento?',
        reflection: 'Qual sinal você acrescentou? Por que ele era necessário?',
        hints: ['O texto começa com uma aspa, mas não termina com outra.', 'No final, precisamos de ponto, aspa e parêntese: .")', 'A correção é print("Hoje vamos observar o céu."). Agora o Python consegue identificar onde o texto termina.']
      },
      {
        id: 'mensagem-criar', kind: 'Escreva com sua dupla', title: 'Nosso primeiro registro',
        intro: '<p>Agora você vai escrever um programa pequeno usando o que já praticou. A área de código está vazia. Use a tecla Enter para começar a segunda linha.</p>',
        code: '', task: 'Escreva duas instruções: a primeira mostra o nome do grupo; a segunda mostra uma observação sobre o céu. Execute e confira a ordem.',
        prediction: 'Quais são as duas mensagens que seu programa vai mostrar?',
        reflection: 'Explique uma linha do seu programa, incluindo print, aspas e parênteses.',
        hints: ['Você precisa de um print para cada mensagem.', 'A estrutura de cada linha é print("sua mensagem").', 'Um exemplo:\nprint("Grupo Nuvem")\nprint("Hoje há nuvens no céu.")\nCada linha mostra uma mensagem. Use suas próprias observações.'],
        finish: ['Consigo escrever uma mensagem usando print.', 'Consigo explicar para que servem aspas e parênteses.', 'Consigo prever a ordem de duas mensagens.']
      }
    ]
  },
  {
    title: 'Guardar uma temperatura',
    activities: [
      {
        id: 'variavel-observar', kind: 'Retome e observe', title: 'Um nome para guardar um número',
        intro: '<p>Na etapa anterior, usamos <code>print</code> para mostrar textos. Agora vamos guardar um número com um nome: isso é uma <strong>variável</strong>.</p><p>Na primeira linha, <code>temperatura = 23</code> guarda o número 23 com o nome temperatura. Aqui, <code>=</code> atribui um valor ao nome. Na segunda linha, <code>print(temperatura)</code> mostra o valor guardado.</p><p>Vamos usar temperaturas inteiras de exemplo, em graus Celsius.</p>',
        code: 'temperatura = 23\nprint(temperatura)',
        task: 'Leia cada linha em voz alta com sua dupla. Depois, execute sem alterar.',
        prediction: 'Vai aparecer a palavra temperatura ou o número 23?',
        reflection: 'Qual linha guarda o número? Qual linha mostra o valor?',
        hints: ['Na segunda linha, temperatura está sem aspas.', 'Sem aspas, o Python procura o valor guardado com esse nome.', 'O resultado é 23. A primeira linha guarda esse valor; a segunda o mostra.']
      },
      {
        id: 'variavel-alterar', kind: 'Altere uma coisa', title: 'Uma nova leitura do termômetro',
        intro: '<p>Imagine que o termômetro mostrou outra temperatura. Podemos mudar o valor guardado e usar a mesma instrução para mostrá-lo.</p>',
        code: 'temperatura = 23\nprint(temperatura)',
        task: 'Troque apenas 23 por 28. Mantenha a segunda linha e execute.',
        prediction: 'O que aparecerá depois da mudança?',
        reflection: 'Por que o resultado mudou se a linha com print ficou igual?',
        hints: ['O valor que será guardado está depois do sinal =.', 'A primeira linha deve ficar temperatura = 28.', 'print(temperatura) mostra o valor guardado com esse nome. Como ele passou a ser 28 nesta execução, o resultado também muda.']
      },
      {
        id: 'variavel-comparar', kind: 'Compare', title: 'Com aspas e sem aspas',
        intro: '<p>Uma diferença pequena muda o significado do código. <code>"temperatura"</code> é um texto. <code>temperatura</code>, sem aspas, é o nome da variável.</p>',
        code: 'temperatura = 23\nprint("temperatura")\nprint(temperatura)',
        task: 'Execute e compare as duas linhas do resultado. Depois, troque 23 por 19 e execute outra vez.',
        prediction: 'Qual print mostrará uma palavra? Qual mostrará um número?',
        reflection: 'Qual linha do resultado mudou? Por que a outra permaneceu igual?',
        hints: ['Observe as aspas no primeiro print.', 'O primeiro print mostra um texto escrito no código; o segundo consulta a variável.', 'O resultado inicial é temperatura e, na linha seguinte, 23. Depois da alteração, só o número muda para 19.']
      },
      {
        id: 'variavel-completar', kind: 'Complete', title: 'Mostre o valor guardado',
        intro: '<p>Este programa já guarda uma temperatura, mas o <code>print()</code> está vazio. Escrever somente o nome da variável dentro dos parênteses permite mostrar seu valor.</p>',
        code: 'temperatura = 21\nprint()',
        task: 'Complete os parênteses de print para mostrar o valor da variável temperatura. Execute.',
        prediction: 'Para mostrar o valor guardado, você deve escrever temperatura com aspas ou sem aspas?',
        reflection: 'Se você usar print(21), o programa acompanhará uma mudança do valor na primeira linha? Explique.',
        hints: ['Queremos consultar a variável, não repetir um número fixo.', 'Escreva temperatura dentro dos parênteses, sem aspas.', 'A segunda linha deve ser print(temperatura). print(21) sempre mostraria 21, mesmo se o valor guardado mudasse.']
      },
      {
        id: 'variavel-corrigir', kind: 'Investigue um erro', title: 'Os nomes precisam combinar',
        intro: '<p>O Python distingue letras maiúsculas e minúsculas. Para consultar uma variável, precisamos escrever o mesmo nome que usamos ao guardar o valor.</p>',
        code: 'temperatura = 24\nprint(Temperatura)',
        task: 'Execute e leia a orientação. Corrija o nome na segunda linha e execute novamente.',
        prediction: 'Qual letra está diferente entre as duas linhas?',
        reflection: 'Por que Temperatura e temperatura não funcionaram como o mesmo nome?',
        hints: ['Compare a primeira letra dos dois nomes.', 'A variável foi criada com t minúsculo. Use o mesmo nome no print.', 'A segunda linha correta é print(temperatura). O resultado será 24.']
      },
      {
        id: 'variavel-criar', kind: 'Escreva com sua dupla', title: 'Guarde outro dado da estação',
        intro: '<p>Vamos aplicar a mesma ideia a outro dado. A variável <code>chuva</code> vai guardar a quantidade de chuva, em milímetros, de um registro de exemplo.</p>',
        code: '', task: 'Crie a variável chuva com o valor 0. Na linha seguinte, mostre seu valor usando print. Execute. Depois, troque 0 por 5 e execute novamente.',
        prediction: 'Quais resultados você espera nas duas execuções?',
        reflection: 'Explique onde seu programa guarda o dado e onde o mostra. O que o número 0 representa neste registro?',
        hints: ['Use a mesma estrutura de temperatura = 23, mas com outro nome e outro número.', 'Primeiro escreva chuva = 0. Depois use print para consultar chuva, sem aspas.', 'Uma solução:\nchuva = 0\nprint(chuva)\nO primeiro resultado é 0 mm. Ao trocar o valor por 5, o resultado será 5 mm. Zero indica que não foi registrada chuva nesse período.'],
        finish: ['Consigo guardar um número em uma variável.', 'Consigo mostrar o valor de uma variável.', 'Consigo explicar a diferença entre texto com aspas e nome sem aspas.']
      }
    ]
  }
];

const $ = id => document.getElementById(id);
let momentIndex = 0, activityIndex = 0, worker, ready = false, busy = false, runTimer, loadTimer;
const prefix = 'clube_python_inicio_v2_'; // Preserve saved work from the original lesson.
function read(key) { try { return localStorage.getItem(prefix + key); } catch { return null; } }
function save(key, value) {
  try { localStorage.setItem(prefix + key, value); }
  catch { $('storage-note').textContent = 'Este navegador não permitiu salvar. Seus textos ficam nesta página enquanto ela estiver aberta.'; }
}
const current = () => lessons[momentIndex].activities[activityIndex];
function persist() {
  const a = current();
  ['code', 'prediction', 'reflection'].forEach(key => save(a.id + '_' + key, $(key).value));
}
function render(focus = false) {
  const a = current(), count = lessons[momentIndex].activities.length;
  $('progress').textContent = `Momento ${momentIndex + 1} · Atividade ${activityIndex + 1} de ${count}`;
  document.querySelectorAll('[data-moment]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.moment) === momentIndex)));
  $('activity-select').replaceChildren(...lessons[momentIndex].activities.map((a, index) => new Option(`${index + 1}. ${a.title}`, index, false, index === activityIndex)));
  $('kind').textContent = a.kind;
  $('activity-title').textContent = a.title;
  $('intro').innerHTML = a.intro;
  $('task').textContent = a.task;
  $('prediction-label').textContent = a.prediction;
  $('reflection-label').textContent = a.reflection;
  ['code', 'prediction', 'reflection'].forEach(key => $(key).value = read(a.id + '_' + key) ?? (key === 'code' ? a.code : ''));
  $('output').textContent = 'Você ainda não executou esta atividade nesta visita.';
  $('output').className = '';
  $('technical').hidden = true;
  $('hints').replaceChildren();
  a.hints.forEach((hint, index) => {
    const detail = document.createElement('details'), summary = document.createElement('summary'), body = document.createElement('pre');
    summary.textContent = ['Dica 1 · Uma pista', 'Dica 2 · Onde mexer', 'Dica 3 · Veja uma solução comentada'][index];
    body.textContent = hint; detail.append(summary, body); $('hints').append(detail);
  });
  $('finish').replaceChildren();
  if (a.finish) {
    const box = document.createElement('div'); box.className = 'finish';
    const title = document.createElement('strong'); title.textContent = 'Pausa para conferir o que aprendemos'; box.append(title);
    a.finish.forEach((text, index) => {
      const label = document.createElement('label'), check = document.createElement('input'); check.type = 'checkbox';
      check.checked = read(a.id + '_check_' + index) === '1';
      check.onchange = () => save(a.id + '_check_' + index, check.checked ? '1' : '0');
      label.append(check, document.createTextNode(text)); box.append(label);
    });
    const note = document.createElement('p');
    note.textContent = momentIndex === 0 ? 'Mostre seu programa ao professor. Se ainda houver dúvidas, retome uma atividade. Você pode deixar o momento 2 para outro encontro.' : 'Mostre e explique seu programa. No próximo encontro, poderemos usar os valores guardados para fazer pequenos cálculos.';
    box.append(note); $('finish').append(box);
  }
  $('previous').disabled = momentIndex === 0 && activityIndex === 0;
  $('next').hidden = momentIndex === 1 && activityIndex === count - 1;
  $('next').textContent = activityIndex === count - 1 ? 'Ir ao momento 2 →' : 'Próxima atividade →';
  if (focus) $('activity-title').focus();
}
function navigate(moment, activity) {
  if (busy) return;
  persist(); momentIndex = moment; activityIndex = activity; render(true);
}
document.querySelectorAll('[data-moment]').forEach(b => b.onclick = () => navigate(Number(b.dataset.moment), 0));
$('activity-select').onchange = e => navigate(momentIndex, Number(e.target.value));
$('previous').onclick = () => activityIndex > 0 ? navigate(momentIndex, activityIndex - 1) : navigate(momentIndex - 1, lessons[momentIndex - 1].activities.length - 1);
$('next').onclick = () => activityIndex + 1 < lessons[momentIndex].activities.length ? navigate(momentIndex, activityIndex + 1) : navigate(momentIndex + 1, 0);
['code', 'prediction', 'reflection'].forEach(key => $(key).addEventListener('input', persist));
$('reset').onclick = () => {
  if ($('code').value !== current().code && !confirm('Voltar ao código inicial desta atividade? O código que você escreveu nela será substituído. Suas respostas serão mantidas.')) return;
  $('code').value = current().code; persist(); $('output').textContent = 'Código inicial recuperado. Execute para ver o resultado.'; $('output').className = ''; $('technical').hidden = true;
};
function setBusy(value) {
  busy = value; $('run').disabled = value || !ready; $('reset').disabled = value; $('stop').hidden = !value; $('code').readOnly = value;
  document.querySelectorAll('[data-moment], #activity-select').forEach(b => b.disabled = value);
  $('previous').disabled = value || (momentIndex === 0 && activityIndex === 0); $('next').disabled = value;
}
function startPython() {
  clearTimeout(loadTimer); clearTimeout(runTimer);
  if (worker) worker.terminate();
  ready = false; setBusy(false); $('run').textContent = 'Preparando Python…';
  $('runtime-status').textContent = 'Preparando o Python no navegador. Você já pode ler e editar.';
  $('retry').hidden = true;
  try { worker = new Worker('../assets/python-inicio-worker.js'); }
  catch { loadFailed(); return; }
  loadTimer = setTimeout(loadFailed, 60000);
  worker.onerror = () => { if (busy) $('output').textContent = 'A execução foi interrompida. Tente carregar o Python novamente.'; loadFailed(); };
  worker.onmessage = ({ data }) => {
    if (data.type === 'ready') {
      clearTimeout(loadTimer); ready = true; setBusy(false); $('run').textContent = 'Executar';
      $('runtime-status').textContent = 'Python pronto. Execute quando terminar de ler a tarefa.';
    } else if (data.type === 'load-error') loadFailed();
    else if (data.type === 'result') {
      clearTimeout(runTimer); setBusy(false);
      const result = data.result;
      $('output').textContent = (result.output || '') + (result.error ? '\n' + result.message : result.output ? '' : 'O programa terminou sem mostrar texto. Para mostrar algo, use print.');
      $('output').className = result.error ? 'error' : '';
      $('technical').hidden = !result.error;
      $('technical-text').textContent = result.details || '';
    }
  };
}
function loadFailed() {
  clearTimeout(loadTimer); clearTimeout(runTimer); if (worker) worker.terminate(); ready = false; setBusy(false);
  $('run').textContent = 'Executar'; $('retry').hidden = false;
  $('runtime-status').textContent = 'Não foi possível preparar o Python. Confira a conexão e tente novamente. Você pode continuar lendo e escrevendo.';
}
$('run').onclick = () => {
  if (!ready || busy) return;
  persist(); $('technical').hidden = true; $('output').className = '';
  if (!$('code').value.trim()) { $('output').textContent = 'A área de código está vazia. Escreva sua primeira instrução ou abra uma dica.'; return; }
  setBusy(true); $('output').textContent = 'Executando…';
  worker.postMessage({ code: $('code').value });
  runTimer = setTimeout(() => stopRun('Este código demorou mais que o esperado. A execução foi parada. Confira as instruções antes de tentar novamente.'), 10000);
};
function stopRun(message) { $('output').textContent = message; startPython(); }
$('stop').onclick = () => stopRun('Execução parada. Seu código foi mantido para você revisar.');
$('retry').onclick = startPython;
render(); startPython();
