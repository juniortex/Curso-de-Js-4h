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

// Comparções com valores não booleanos:
/* Valores Falsy(falsos):
// underfined
// null
// 0
// false
// ''
// NaN - Not a Number*/

// Valores Truthy(são todos os valores não falsos).

// Operadores Bitwise:

//=================================================
// 1º Mini-Projeto
// Trocando valores de variáveis:
let cor1 = 'azul'
let cor2 = 'Vermelho'
document.write(`${cor1}<br>${cor2}<hr>`)

// Resolução:
document.write('<strong>Trocando as cores de lugar:</strong><br>')
let cort = cor1
cor1 = cor2
cor2 = cort
document.write(`${cor1}<br>${cor2}<hr>`)
//=================================================

// Condições - if, else, else if:
// Condições Simples - if, else:
let valor = 10
if (valor <= 10){
    document.write(`Curtando R$${valor}, o item está barato<hr>`)
} else{
    document.write(`Curtando R$${valor}, o item está caro<hr>`)
}

// Condições Compostas - if, else, else if:
let hora = new Date().getHours()

if (hora >= 6 && hora <= 12){
    document.write(`${hora}. Bom dia!<hr>`)
}
else if (hora > 12 && hora <= 18){
    document.write(`${hora}. Boa tarde!<hr>`)
}
else {
    document.write(`${hora}. Boa noite!<hr>`)
}
// As condições tbm podem ser aninhadas, formando uma estrutura mais complexa de condições.

// Switch Case:
let user = 'Premium'

switch (user){
    case 'Comum':
        document.write(`Usuário ${user}: vojcê não tem acesso Premium...`)
        break
    case 'Vip':
        document.write(`Usuário ${user}: você não tem acesso Premium...`)
        break
    case 'Premium':
        document.write(`Usuário ${user}: Bem vindo!`)
        break
    default:
        document.write(`Usuário inválido!`)
}
document.write('<hr>')

/* Laço/Loop:*/

// For:
document.write(`<strong>Loop for de 1 a 10:</strong><br>`)
for(let i = 1; i <= 10; i++){
    document.write(`${i}<br>`)
}
document.write('<hr>')

//while:
document.write(`<strong>Loop while de 1 a 10:</strong><br>`)
let i = 1
while (i <= 10){
    document.write(`${i}<br>`)
    i++
}
document.write('<hr>')

//do while:
document.write(`<strong>Loop do while de 1 a 10:</strong><br>`)
let c = 1
do{
    document.write(`${c}<br>`)
    c++
}while (c <= 10)
document.write('<hr>')

//For-in:
const p = {
    //chave: 'valor'
    nome: 'Jhonatan',
    idade: 25
}
for(let chave in p){
    document.write(`${chave}: `,p[chave] + '<br>')
}
document.write('<hr>')

const cores = ['azul', 'vermelho', 'amarelo']

for(let indice in cores){
    document.write(cores[indice] + '<br>')
}
document.write('<hr>')

// For-of:
for(let cor of cores){
    document.write(cor + '<br>')
}
document.write('<hr>')

//=================================================
// 2º Mini-Projeto
// Máximo entra dois valores:
function max(n1,n2){
    return n1 > n2 ? n1 : n2
}
let valorMaior = max(1,2)
document.write(valorMaior + '<hr>')

//=================================================
// 3º Mini-Projeto
// FizzBuzz:
// Divisível por 3 => retorn 'Fizz'
// Divisível por 5 => retorn 'Buzz'
// Divisível por 3 e 5 => retorn 'FizzBuzz'
// Não é divisível por 3 ou 5 => retorn 'Entrada'
// Não é um número => return 'Não é um número'

const result = fizzBuzz(15)
document.write(result + '<hr>')

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número.'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    return entrada
}

//==================================================
//  (Mini-Projeto 4) - Medidor de Velocidade
//==================================================

// Velocidade máxim de até 70km => retorna 'Ok'
// A cada 5km acima de 70km => perde 1 ponto na carteira
// Caso receba menos 12 pontos => 'Carteira suspensa.'
// Dica: usar Math.Floor()

const radar = verificarVelocidade(120)
document.write(radar + '<hr>')

function verificarVelocidade(velocidade){
    let limiteVel = 70
    let kmPonto = 5
    let limitePon = 12
    let pontos = Math.floor((velocidade-limiteVel)/kmPonto)
    let aviso = `Você excedeu o limite de velocidade!<br>Perdeu ${pontos} pontos na carteira.`
    if (velocidade <= limiteVel)
        return 'Ok'
    else {
        if (pontos >= limitePon)
            return `${aviso}<br>CARTEIRA SUSPENSA!`
        else
            return `${aviso}`
    }
}


//==================================================
//  (Mini-Projeto 5) - Par ou Impar?
//==================================================
// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

exibirParouImpar(5)

function exibirParouImpar(valores){
    for(let v = 1; v <= valores; v++){
        if (v%2 == 0)
            document.write(`${v} "Par".<hr>`)
        else
            document.write(`${v} "Impar".<hr>`)
    }
}


//==================================================
//  (Mini-Projeto 6) - Encontre o String
//==================================================
// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2020,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibProp(filme)
function exibProp(objeto){
    for(propriedade in objeto)
        if (typeof objeto[propriedade] === 'string')
            document.write(`${propriedade}: ${objeto[propriedade]}<br>`)
}
document.write('<hr>')


//==================================================
//  (Mini-Projeto 7) - Multiplos de 3 e 5
//==================================================
// Criar função somar() que retorna a soma de todos os multiplos de 3 e 5

somar3e5(15)
function somar3e5(limite){
    let soma = 0
    for(c = 1; c <= limite; c++){
        if (c%3 === 0 || c%5 === 0){
            soma += c
        }
    }
    document.write(`<br>A soma dos multiplos de 3 e 5, entre 1 e ${limite} é: ${soma}<hr>`)
}


//==================================================
//  (Mini-Projeto 8) - Média de nota escolar
//==================================================
// Obter a média a partir de um array

//000-059: F
//060-069: D
//070-079: C
//080-089: B
//090-100: A

const Notas = [90,95,87]

document.write(`Com as notas: ${Notas}, você alcançou a pontuação equivalente a média ${media(Notas)}.`)

// function media(notas){
//     let somaNotas = 0
//     for(nota of notas){
//         somaNotas += nota
//     }
//     let media = somaNotas/notas.length

//     if (media < 59) return 'F'
//     if (media < 69) return 'D'
//     if (media < 79) return 'C'
//     if (media < 89) return 'B'
//     return 'A'
// }

function media(notas){
    let media = calcMedia(notas)

    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'

    function calcMedia(notas){
        let somaNotas = 0
        for(let nota of notas){
            somaNotas += nota
        }
        return somaNotas/notas.length
    }
}


//==================================================
//  (Mini-Projeto 9) - Contador de asteríscos
//==================================================