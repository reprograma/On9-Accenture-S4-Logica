const readlineSync = require("readline-sync");

let dados = {
    nomeCompleto: "",
    idade: 0,
    altura: 0,
    metrosporDia: 0,
}


dados.nomeCompleto = readlineSync.question("Qual o seu nome completo? "),
dados.idade = readlineSync.question("Quantos anos voce tem? "),
dados.altura = readlineSync.question("Qual a sua altura? "),
dados.metrosporDia = readlineSync.question("Quantos metros voce caminha por dia? "),

console.log("-----------------")
console.log ("Cadastro:")
console.log (dados)





