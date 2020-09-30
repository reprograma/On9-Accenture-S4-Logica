const readlineSync = require("readline-sync");

let cadastroPessoa = {
    nome: "",
    idade: "",
    altura: "",
    metrosDia: "",
};

cadastroPessoa.nome = readlineSync.question("Qual o seu nome? ");
cadastroPessoa.idade = Number(readlineSync.question("Qual a sua idade? "));
cadastroPessoa.altura = Number(readlineSync.question("Qual a sua altura? "));
cadastroPessoa.metrosDia = Number(readlineSync.question("Quantos metros você caminhou hoje? "));

console.log(cadastroPessoa);