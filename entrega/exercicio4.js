const input = require("readline-sync")
const readlineSync = require("readline-sync")

let nome = readlineSync.question('Qual o seu nome completo? ')

let idade = readlineSync.question('Qual a sua idade? ')

let altura = readlineSync.question('Qual a sua altura? ')

let metrosCaminhados = readlineSync.question('Quantos metros voce caminhou hoje? ')

console.log("Oi " + nome + ', ' + 'voce tem ' + idade + ' anos' + ', ' + altura + ' metros de altura' + ' e caminhou ' + metrosCaminhados + ' metros hoje')
