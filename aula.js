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

/* Valores - String, Number, Boolean, Underfined, Null*/

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

document.write(`Resultado do tipo primitivo ${typeof(aprovado)}: ${aprovado}  (Verdadeiro)<br>`)

// Underfined:
// É o tipo de valor que não foi definido.

let indefinido

document.write(`Resultado do tipo primitivo ${typeof(indefinido)}: ${indefinido} (Indefinido)<br>`)

// Null:
// É o tipo de valor que da um reset na variável.

let reseta = null

document.write(`Resultado do tipo primitivo ${typeof(reseta)}: ${reseta} (reset) <br><hr>`)


/* Referências - Objects, Arrays, Functions*/

// Objects:
// É um tipo que junta diversas informações em um só lugar.

let pessoa = {
    nome: 'Osvaldo', //nome(chave): 'Osvaldo'(valor)
    sobrenome: 'Junior',
    idade: 33
}

console.log(pessoa)

document.write(`${pessoa.nome} ${pessoa.sobrenome}, está com ${pessoa.idade} anos...<br>`)

// Arrays:
// É um conjunto de dados que são armazenados em índices.

let array = [true,26,'Osvaldo',null] //[0,1,2,3] cada valor representa um índice.

console.log(array)

document.write(`Exemplo de array com ${array.length} índices, sendo o último vázio: [${array}null]<br><hr>`)

// Functions:
// Conceito:

let cor = 'blue'

function mudarCor(modcor){ 
    cor = modcor
}

document.write(`${cor} => `)

mudarCor('vermelho')

document.write(`${cor}<br>`)

// Tipos de função - sem retorno e com retorno de resultado:

// Sem retorno de resultado:
function mostrarNome(){
    nome = 'Dani'
}

mostrarNome()
document.write(`${nome}<br>`)

// Com retorno de resultado:
function duplicarValor(valor){
    return valor*2
}

let resultado = duplicarValor(2)
document.write(`${resultado}<hr>`)


/* 3. Operadores - Aritméticos, Atribuíção, Comparação, Lógicos, Bitwise:*/

// Operadores Aritméticos:
let salario = 1200
// +  (soma)
document.write(`${salario + salario}<br>`)
// -  (menos)
document.write(`${salario - salario}<br>`)
// *  (vezes)
document.write(`${salario * salario}<br>`)
// /  (dividir)
document.write(`${salario / salario}<br>`)
// ** (elevado)
document.write(`${salario ** salario}<br>`)
// ++ (incremento)
document.write(`${++salario}<br>`)
// -- (decremento)
document.write(`${--salario}<hr>`)



// Operadores Atribuíção:

// = (a variável recebe um valor)
let val = 10
document.write(val,'<br>')

// += (a veriável recebe o valor + valor)
val += val
document.write(`${val}<br>`)

// -= (a variável recebe o valor - valor)
val -= val
document.write(`${val}<hr>`)



// Operadores de Comparação - Binários e Ternários:

// Binários:
// São aqueles que possuem comparação entre dois valores (igualdade ou diferênça):

// Igualdade Estrita:
document.write(('1' === 1)+'<br>')

// Igualdade parcial:
document.write(('1' == 1)+'<br>')

// Diferênca Estrita:
document.write(('1' !== 1)+'<br>')

// Diferênca parcial:
document.write(('1' != 1)+'<hr>')

// Ternários - ? :
// São aqueles que possuem três partes executáveis:
// Comparação ? ação se verdadeiro : ação se falso:
let pontos = 200
let tipo = pontos > 100 ?'Premium':'Comum'
document.write(tipo,'<hr>')


// Operadores Lógicos - e(&&), ou(||) e não(!):
// && - retorna true ou false:
// true, se os dois operandos forem true.
// false, se os dois operandos forem false.
document.write(true && true,'<br>')
document.write(true && false,'<br>')
document.write(false && false,'<br>')
document.write(false && true,'<hr>')

// || - retorna true ou false:
// true, se pelo menos um dos dois operandos forem true.
// false, se os dois operandos forem false.
document.write(true || true,'<br>')
document.write(true || false,'<br>')
document.write(false || false,'<br>')
document.write(false || true,'<hr>')

// ! - retorna uma negação:
document.write(!false,'<br>') //não é falso
document.write(!true,'<hr>') //não é verdadeiro


// Operadores Bitwise: