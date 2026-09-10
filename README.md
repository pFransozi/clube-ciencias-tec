# Clube de Ciências Tec

Portal do projeto de investigação do microclima da escola com dados, estatística e programação.

## Pergunta de pesquisa

> Como temperatura, pressão atmosférica e precipitação se comportam ao longo do tempo? É possível identificar padrões relacionados à ocorrência de chuva?

## Estrutura

```text
clube-ciencias-tec/
├── index.html
├── assets/
│   └── site.css
├── aulas/
│   ├── 01-historia-dados.html
│   ├── 02-analise-clima.html
│   ├── 03-revisao-dados.html
│   ├── 04-estatistica.html
│   ├── 05-missao-clima.html
│   ├── 06-microclima-previsao.html
│   └── 07-programacao-python.html
└── materiais/
    └── README.md
```

## Percurso

1. **Conhecer e organizar os dados** — história-problema, registros brutos e padronização.
2. **Analisar os dados** — média, mínimo, máximo, chuva, vento e gráficos.
3. **Revisar a base** — comparação com registros originais, correções e fórmulas.
4. **Investigar com estatística** — mediana, amplitude, frequência e comparação entre grupos.
5. **Missão Clima e Tecnologia** — integração e comunicação da pesquisa.
6. **Microclima e previsão** — variações de pressão e temperatura, padrões, regra e taxa de acerto.
7. **Programação** — introdução a Python com código executado diretamente no navegador.

## Publicação

O repositório é publicado pelo GitHub Pages em:

`https://pfransozi.github.io/clube-ciencias-tec/`

A aula 07 utiliza Pyodide para executar Python diretamente no navegador, sem instalação local para os estudantes.

## Aula 07 — primeiros passos

A aula foi dividida em dois momentos de seis atividades: mensagens com `print` e valores em variáveis. Cada momento alterna observação, previsão do resultado, alteração, preenchimento, correção de um erro proposital e criação independente. Dicas graduais e respostas locais acompanham cada atividade. O segundo momento pode ser realizado em outro encontro.

A execução usa um Web Worker, com interrupção manual, limite de saída e limite de tempo. Os erros comuns recebem orientações em português; os detalhes técnicos ficam recolhidos. É necessário servir os arquivos por HTTP, como no GitHub Pages, e ter acesso ao CDN do Pyodide. Para testar localmente, execute `python3 -m http.server 8000` na raiz do projeto e abra `http://localhost:8000/aulas/07-programacao-python.html`.

O material anterior foi preservado em `aulas/07-programacao-python-referencia.html`. Os códigos salvos nessa versão mantêm suas chaves; a nova aula usa chaves próprias para não sobrescrevê-los. O armazenamento é local ao navegador, sem envio de respostas a um servidor.
