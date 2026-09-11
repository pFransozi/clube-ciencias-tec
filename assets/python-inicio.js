const lessons = [
  {
    "title": "Mostrar mensagens",
    "activities": [
      {
        "id": "fala-robo",
        "title": "Um robô com fome",
        "intro": "<p><code>print</code> é a instrução para mostrar algo na tela. O texto fica entre aspas, dentro dos parênteses: <code>print(\"mensagem\")</code>. As aspas indicam onde a mensagem começa e termina; elas não aparecem no resultado.</p>",
        "example": "print(\"Sou um robô e quero uma coxinha.\")",
        "expected": "Sou um robô e quero uma coxinha.",
        "task": "Troque apenas a mensagem por uma fala engraçada de robô. Sugestões: “Minha bateria acabou na hora da prova.” ou “Atualização concluída: agora sei fazer miojo.” Preserve print, aspas e parênteses.",
        "code": "print(\"Sou um robô e quero uma coxinha.\")",
        "solution": "print(\"Minha bateria acabou na hora da prova.\")",
        "hints": [
          "Mude somente o trecho entre as aspas.",
          "A estrutura é print(\"sua frase aqui\").",
          "Uma possibilidade:\nprint(\"Minha bateria acabou na hora da prova.\")"
        ],
        "kind": "Mostrar mensagens"
      },
      {
        "id": "gato-completar",
        "title": "O gato mandou um recado",
        "intro": "<p>Duas aspas juntas, <code>\"\"</code>, representam um texto vazio. Para criar uma mensagem, clique entre elas e escreva. O computador vai mostrar exatamente o texto que você colocou.</p>",
        "example": "print(\"Miau. Este teclado agora é minha cama.\")",
        "expected": "Miau. Este teclado agora é minha cama.",
        "task": "Complete as aspas vazias com um recado de um animal. Pode ser um gato pedindo Wi-Fi, um cachorro reclamando da ração ou uma capivara pedindo silêncio.",
        "code": "print(\"\")",
        "solution": "print(\"Sou uma capivara. Favor não interromper meu cochilo.\")",
        "hints": [
          "Clique no espaço entre as duas aspas.",
          "Você só precisa escrever a fala do animal. Os outros sinais já estão prontos.",
          "Uma possibilidade:\nprint(\"Sou uma capivara. Favor não interromper meu cochilo.\")"
        ],
        "kind": "Mostrar mensagens"
      },
      {
        "id": "dialogo-linhas",
        "title": "Uma conversa em duas linhas",
        "intro": "<p>Cada <code>print</code> mostra uma mensagem em uma nova linha. O Python executa as instruções de cima para baixo. Use a tecla Enter para começar outra linha de código.</p>",
        "example": "print(\"Computador: você é um robô?\")\nprint(\"Eu: depois de acordar cedo, talvez.\")",
        "expected": "Computador: você é um robô?\nEu: depois de acordar cedo, talvez.",
        "task": "Crie uma conversa com duas falas: uma pergunta de um alienígena e sua resposta. Escreva um print por linha. Sugestão: “Vocês comem a embalagem do pastel?” / “Só quando o papel gruda.”",
        "code": "print(\"Alienígena: \")\nprint(\"Eu: \")",
        "solution": "print(\"Alienígena: humanos carregam na tomada?\")\nprint(\"Eu: não, a gente carrega com pão de queijo.\")",
        "hints": [
          "Complete a fala depois de Alienígena: e a resposta depois de Eu:.",
          "Mantenha cada mensagem em seu próprio print.",
          "Uma possibilidade:\nprint(\"Alienígena: humanos carregam na tomada?\")\nprint(\"Eu: não, a gente carrega com pão de queijo.\")"
        ],
        "kind": "Mostrar mensagens"
      },
      {
        "id": "texto-numero",
        "title": "Uma senha muito suspeita",
        "intro": "<p>Para mostrar um texto, usamos aspas. Para mostrar um número, podemos escrevê-lo sem aspas: <code>print(7)</code>. Neste exemplo, o primeiro print mostra a frase e o segundo mostra o número.</p>",
        "example": "print(\"Minha senha supersecreta é:\")\nprint(1234)",
        "expected": "Minha senha supersecreta é:\n1234",
        "task": "Faça o programa mostrar “Quantidade de abas abertas no meu cérebro:” e, na linha seguinte, um número inventado. Escreva a frase com aspas e o número sem aspas. Use apenas dados fictícios.",
        "code": "print(\"\")\nprint()",
        "solution": "print(\"Quantidade de abas abertas no meu cérebro:\")\nprint(99)",
        "hints": [
          "A frase vai entre as aspas do primeiro print.",
          "Escreva um número dentro dos parênteses do segundo print.",
          "Uma possibilidade:\nprint(\"Quantidade de abas abertas no meu cérebro:\")\nprint(99)"
        ],
        "kind": "Mostrar mensagens"
      },
      {
        "id": "erro-pizza",
        "title": "A pizza perdeu uma aspa",
        "intro": "<p>Os sinais precisam formar pares: uma aspa abre o texto e outra fecha; um parêntese abre e outro fecha. Se algum faltar, o Python avisa que não entendeu. O exemplo está correto; o exercício abaixo tem um erro proposital.</p>",
        "example": "print(\"A pizza chegou antes da minha vontade de estudar.\")",
        "expected": "A pizza chegou antes da minha vontade de estudar.",
        "task": "Execute o exercício, leia a orientação e corrija a aspa que falta. Depois de fazer funcionar, invente outra desculpa que uma pizza daria para chegar atrasada.",
        "code": "print(\"Desculpa o atraso. Fiquei presa no forno.)",
        "solution": "print(\"Desculpa o atraso. O queijo não queria sair de casa.\")",
        "hints": [
          "Compare o final do exemplo com o final do exercício.",
          "Feche o texto com uma aspa antes do parêntese: .\")",
          "Uma possibilidade:\nprint(\"Desculpa o atraso. O queijo não queria sair de casa.\")"
        ],
        "kind": "Mostrar mensagens"
      },
      {
        "id": "criar-mini-historia",
        "title": "Uma história de três frases",
        "intro": "<p>Podemos juntar várias instruções para montar um pequeno programa. Para uma história de três frases, escreva três prints, um por linha. A ordem das linhas também será a ordem da história.</p>",
        "example": "print(\"Um pinguim entrou na sala.\")\nprint(\"Pediu para ligar o ar-condicionado.\")\nprint(\"Disse que estava passando calor.\")",
        "expected": "Um pinguim entrou na sala.\nPediu para ligar o ar-condicionado.\nDisse que estava passando calor.",
        "task": "Escreva uma história engraçada de três frases. Escolha uma ideia: uma mochila que fala, um dragão com soluço ou uma geladeira que faz exercícios. A área de código está vazia para você criar seus três prints.",
        "code": "",
        "solution": "print(\"Minha mochila começou a falar.\")\nprint(\"Ela pediu férias.\")\nprint(\"Disse que estava carregando problemas demais.\")",
        "hints": [
          "Escolha um personagem e escreva o que aconteceu com ele.",
          "Use print(\"primeira frase\"), pressione Enter e repita para as outras frases.",
          "Uma possibilidade:\nprint(\"Minha mochila começou a falar.\")\nprint(\"Ela pediu férias.\")\nprint(\"Disse que estava carregando problemas demais.\")"
        ],
        "finish": "Seu primeiro conjunto de programas está pronto. Você já pode criar mensagens, diálogos e histórias usando print.",
        "kind": "Mostrar mensagens"
      }
    ]
  },
  {
    "title": "Guardar informações",
    "activities": [
      {
        "id": "pontos-jogo",
        "title": "Quantos pontos vale esse tombo?",
        "intro": "<p>Uma <strong>variável</strong> guarda um valor com um nome. Em <code>pontos = 10</code>, o sinal <code>=</code> atribui o número 10 ao nome pontos. Depois, <code>print(pontos)</code> mostra o valor guardado. O nome está sem aspas para o Python consultar a variável.</p>",
        "example": "pontos = 10\nprint(pontos)",
        "expected": "10",
        "task": "Imagine um jogo em que o personagem ganha pontos por escorregar numa casca de banana. Troque 10 por uma pontuação inventada. Execute mantendo a segunda linha igual.",
        "code": "pontos = 10\nprint(pontos)",
        "solution": "pontos = 250\nprint(pontos)",
        "hints": [
          "A pontuação fica depois do sinal =.",
          "Mude apenas o número da primeira linha. O print já consulta pontos.",
          "Uma possibilidade:\npontos = 250\nprint(pontos)"
        ],
        "kind": "Guardar informações"
      },
      {
        "id": "nome-monstro",
        "title": "Batize seu monstro",
        "intro": "<p>Uma variável também pode guardar texto. Em <code>nome = \"Zé Tentáculo\"</code>, as aspas pertencem ao texto guardado. Para mostrar esse texto, usamos <code>print(nome)</code>, sem aspas ao redor de nome.</p>",
        "example": "nome = \"Zé Tentáculo\"\nprint(nome)",
        "expected": "Zé Tentáculo",
        "task": "Crie um nome engraçado para um monstro. Complete o texto da primeira linha e execute. Sugestões: Dona Meleca, Capitão Chulé ou Lorde Pudim.",
        "code": "nome = \"\"\nprint(nome)",
        "solution": "nome = \"Lorde Pudim\"\nprint(nome)",
        "hints": [
          "O nome do personagem vai entre as aspas da primeira linha.",
          "A segunda linha mostra o texto guardado. Ela já está pronta.",
          "Uma possibilidade:\nnome = \"Lorde Pudim\"\nprint(nome)"
        ],
        "kind": "Guardar informações"
      },
      {
        "id": "palavra-valor",
        "title": "O nome da caixa ou o que tem dentro?",
        "intro": "<p>Com aspas, <code>print(\"apelido\")</code> mostra a palavra apelido. Sem aspas, <code>print(apelido)</code> procura e mostra o valor da variável. Por isso, os dois prints do exemplo produzem resultados diferentes.</p>",
        "example": "apelido = \"Batata Cósmica\"\nprint(\"apelido\")\nprint(apelido)",
        "expected": "apelido\nBatata Cósmica",
        "task": "Complete os dois prints: o primeiro deve mostrar a palavra apelido; o segundo, o valor guardado. Depois, invente outro apelido na primeira linha e execute novamente.",
        "code": "apelido = \"Batata Cósmica\"\nprint()\nprint()",
        "solution": "apelido = \"Pudim Intergaláctico\"\nprint(\"apelido\")\nprint(apelido)",
        "hints": [
          "O primeiro print precisa de texto entre aspas.",
          "No primeiro, escreva \"apelido\". No segundo, escreva apelido sem aspas.",
          "Uma possibilidade:\napelido = \"Pudim Intergaláctico\"\nprint(\"apelido\")\nprint(apelido)"
        ],
        "kind": "Guardar informações"
      },
      {
        "id": "energia-atualizar",
        "title": "A bateria do modo segunda-feira",
        "intro": "<p>Uma variável pode receber outro valor durante o programa. O Python segue de cima para baixo: cada print mostra o valor que a variável tem naquele momento. O segundo <code>=</code> substitui o valor guardado.</p>",
        "example": "energia = 100\nprint(energia)\nenergia = 5\nprint(energia)",
        "expected": "100\n5",
        "task": "Mostre a energia de um personagem antes e depois de encontrar um bolo. Altere só os dois números: comece com pouca energia e termine com muita. Execute para ver os dois valores na ordem.",
        "code": "energia = 100\nprint(energia)\nenergia = 5\nprint(energia)",
        "solution": "energia = 2\nprint(energia)\nenergia = 100\nprint(energia)",
        "hints": [
          "Há um número na primeira linha e outro na terceira.",
          "O primeiro print mostra o valor inicial. O segundo mostra o valor atribuído depois.",
          "Uma possibilidade:\nenergia = 2\nprint(energia)\nenergia = 100\nprint(energia)"
        ],
        "kind": "Guardar informações"
      },
      {
        "id": "nome-corrigir",
        "title": "O dragão confundiu as letras",
        "intro": "<p>Para consultar uma variável, use o mesmo nome com que ela foi criada. O Python distingue maiúsculas e minúsculas: <code>dragao</code> e <code>Dragao</code> são nomes diferentes. O exemplo funciona; o exercício tem uma letra para corrigir.</p>",
        "example": "dragao = \"Torradeira\"\nprint(dragao)",
        "expected": "Torradeira",
        "task": "Execute o exercício e corrija a letra diferente no print. Depois, troque o nome do dragão por outro. Sugestões: Churrasquinho, Faísca ou Senhor Micro-ondas.",
        "code": "dragao = \"Torradeira\"\nprint(Dragao)",
        "solution": "dragao = \"Senhor Micro-ondas\"\nprint(dragao)",
        "hints": [
          "Compare o d da primeira linha com o D da segunda.",
          "A variável foi criada como dragao, com d minúsculo. Use esse mesmo nome no print.",
          "Uma possibilidade:\ndragao = \"Senhor Micro-ondas\"\nprint(dragao)"
        ],
        "kind": "Guardar informações"
      },
      {
        "id": "boletim-malucO",
        "title": "O boletim do planeta Pudim",
        "intro": "<p>Agora vamos combinar mensagens e uma variável. Um print com texto pode apresentar o dado; outro print consulta seu valor. Aqui, a temperatura é um número de exemplo em graus Celsius.</p>",
        "example": "temperatura = 23\nprint(\"Temperatura na escola, em graus Celsius:\")\nprint(temperatura)",
        "expected": "Temperatura na escola, em graus Celsius:\n23",
        "task": "Crie um boletim de um planeta inventado: guarde um número na variável temperatura; mostre uma frase com o nome do planeta; mostre o valor da variável; termine com uma previsão engraçada, como “Possibilidade de chuva de pipoca”. São quatro linhas de código.",
        "code": "",
        "solution": "temperatura = 30\nprint(\"Temperatura no planeta Pudim, em graus Celsius:\")\nprint(temperatura)\nprint(\"Possibilidade de chuva de pipoca.\")",
        "hints": [
          "Comece com temperatura = seguido de um número. Depois, use três prints.",
          "O primeiro e o último print mostram frases entre aspas. O print do meio mostra temperatura sem aspas.",
          "Uma possibilidade:\ntemperatura = 30\nprint(\"Temperatura no planeta Pudim, em graus Celsius:\")\nprint(temperatura)\nprint(\"Possibilidade de chuva de pipoca.\")"
        ],
        "finish": "No planeta inventado vale brincar. Na investigação da escola, vamos usar a mesma programação com os dados reais da estação.",
        "kind": "Guardar informações"
      }
    ]
  }
];

const $ = id => document.getElementById(id);
let momentIndex = 0, activityIndex = 0, worker, ready = false, busy = false, runTimer, loadTimer;
const prefix = 'clube_python_inicio_v3_'; // New activities; leave earlier saved work untouched.
function read(key) { try { return localStorage.getItem(prefix + key); } catch { return null; } }
function save(key, value) {
  try { localStorage.setItem(prefix + key, value); }
  catch { $('storage-note').textContent = 'Este navegador não permitiu salvar. Seu código fica nesta página enquanto ela estiver aberta.'; }
}
const current = () => lessons[momentIndex].activities[activityIndex];
function persist() {
  const a = current();
  save(a.id + '_code', $('code').value);
}
function render(focus = false) {
  const a = current(), count = lessons[momentIndex].activities.length;
  $('progress').textContent = `Atividade ${activityIndex + 1} de ${count}`;
  document.querySelectorAll('[data-moment]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.moment) === momentIndex)));
  $('activity-select').replaceChildren(...lessons[momentIndex].activities.map((a, index) => new Option(`${index + 1}. ${a.title}`, index, false, index === activityIndex)));
  $('kind').textContent = a.kind;
  $('activity-title').textContent = a.title;
  $('intro').innerHTML = a.intro;
  $('task').textContent = a.task;
  $('example-code').textContent = a.example;
  $('example-output').textContent = a.expected;
  $('code').value = read(a.id + '_code') ?? a.code;
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
    const note = document.createElement('p');
    note.textContent = a.finish;
    box.append(note); $('finish').append(box);
  }
  $('previous').disabled = momentIndex === 0 && activityIndex === 0;
  $('next').hidden = momentIndex === 1 && activityIndex === count - 1;
  $('next').textContent = activityIndex === count - 1 ? 'Guardar informações →' : 'Próxima atividade →';
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
$('code').addEventListener('input', persist);
$('reset').onclick = () => {
  if ($('code').value !== current().code && !confirm('Recomeçar este exercício? O código que você escreveu nele será substituído pelo código inicial.')) return;
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
