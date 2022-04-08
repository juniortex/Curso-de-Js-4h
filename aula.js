/* 1. Variáveis:*/

// Nomeação:
// Sempre deve nomear uma variável com o uso do canelCase, que consiste em começar sempre com uma letra minúscula na primeira palavra e nas palavras seguintes, se houver, usar a primeira letra em maiúscula. Exemplo - nomeCompleto:

var nomeCompleto = 'Osvaldo Junior'

//console.log(`Resultado do código referente a Variáveis: ${nomeCompleto}`)

document.write(`Resultado do código referente a Variáveis: ${nomeCompleto} <br>`)


/* Tipos - Var, let e const:*/

// Escopo global - Var:
// Ao atribuir um valor a uma variável com o prefixo var, esse valor ficará sendo válido em todas as partes do código.

var global = 'valor global'

//console.log(`Resultado do código referente a escopo global: ${global}`)

document.write(`Resultado do código referente a escopo global: ${global} <br>`)

// Escopo local - let:
// Ao atribuir um valor a uma variável com o prefixo let, esse valor ficará sendo válido apenas dentro do escopo do código onde essa variável foi atribuída.

let local = 'valor local'

//console.log(`Resultado do código referente a escopo local: ${local}`)

document.write(`Resultado do código referente a escopo local: ${local} <br>`)


// Constantes - const:
// Uma variável com prefixo const, é um tipo de váriável que, uma vez tendo seu valor atruído, esse valor não pode mais ser alterado.

const constante = 'valor constante'

//console.log(`Resultado do código referente a constante: ${constante}`)

document.write(`Resultado do código referente a constante: ${constante} <br><hr>`)



/* 2. Tipos Primitivos - Valores e Referências:*/

/* Valores - String, Number, Boolean, Underfined*/

// String:
// É o tipo de valor que contém letras, números, símbolos e caracteres especiais.

let nome = `'Junior'` //string

//console.log(`Resultado do tipo primitivo string: ${nome}`)

document.write(`Resultado do tipo primitivo ${typeof(nome)} : ${nome} <br>`)

// Number:
// É o tipo de valor que contém números inteiros ou decimais.

let idade = 25

document.write(`Resultado do tipo primitivo ${typeof(idade)}: ${idade}<br>`)

// Boolean:
// É o tipo de valor que define condições verdadeiras ou falsas.

let aprovado = true

document.write(`Resultado do tipo primitivo ${typeof(aprovado)}: ${aprovado}  (Aprovado!)`)

// Underfned:
// É o tipo de valor que define condições verdadeiras ou falsas.

let aprovado = true

document.write(`Resultado do tipo primitivo ${typeof(aprovado)}: ${aprovado}  (Aprovado!)`)