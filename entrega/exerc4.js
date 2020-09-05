const readlineSync = require("readline-sync");

let pessoa = {
    nome: "",
    idade: "",
    altura: "",
    metrosCaminhadosDia: "",
}

pessoa.nome = readlineSync.question("Digite seu nome:");
pessoa.idade = readlineSync.question("Digite a sua idade:");
pessoa.altura = readlineSync.question("Digite a sua altura:");
pessoa.metrosCaminhadosDia = readlineSync.question("Quantos metros voce caminhou hoje?");


console.log(pessoa);