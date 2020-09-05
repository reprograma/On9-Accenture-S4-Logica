const readlineSync = require("readline-sync");
let cadastroPessoa = { 
    nome: "",
    idade:"" ,
    altura:"" ,
    caminhadaDiaria:"" ,
}
cadastroPessoa.nome = readlineSync.question("Qual o seu nome completo? ");
cadastroPessoa.idade = Number(readlineSync.question("Qual sua idade? "));
cadastroPessoa.altura = Number(readlineSync.question("Qual sua altura? "));
cadastroPessoa.caminhadaDiaria = Number(readlineSync.question("Quantos metros voce andou hoje? "));

console.log(cadastroPessoa)