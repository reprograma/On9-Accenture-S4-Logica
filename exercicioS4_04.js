let readlineSync = require("readline-sync");

let pessoa = {
    nome:"",
    idade: 0,
    altura: 0,
    metrosCaminhadosDia: 0,
    };

pessoa.nome = readlineSync.question("Digite aqui seu nome: ");
pessoa.idade = readlineSync.question("Quantos anos você tem?");
pessoa.altura = readlineSync.question("Qual a sua altura?");
pessoa.metrosCaminhadosDia = readlineSync.question("Quantos metros você caminhou hoje?"); 

console.log(pessoa); 
