# Ambientes de Software

Repositório da disciplina de Ambientes de Software. Reúne algoritmos fundamentais escritos em JavaScript e Java, uma interface web para executá-los e testes unitários com Jest.

## Algoritmos

- Contagem (`contar`): conta os números da lista entre o primeiro item e o tamanho da lista
- Fibonacci (`fibonacci` e `fibonacciSequencia`)
- Máximo divisor comum (`mdc`)
- Número primo (`ehPrimo`)
- Ordenação Quicksort (`quicksort`)
- Somatório (`somar`)

## Pré-requisito

- [Node.js](https://nodejs.org/) (inclui o npm)

## Como executar os testes

```bash
npm install
npm test
```

Para ver as demonstrações no terminal:

```bash
node projeto_1/javascript/algoritmos.js
```

## Estrutura de pastas

```
.
├── projeto_1/
│   ├── index.html             # interface web que executa os algoritmos
│   ├── executar.sh            # compila e inicia o servidor Java
│   ├── java/                  # versão em Java dos algoritmos e servidor
│   └── javascript/
│       └── algoritmos.js      # algoritmos em JavaScript
├── tests/                     # testes unitários (Jest), um arquivo por algoritmo
├── package.json
└── README.md
```
