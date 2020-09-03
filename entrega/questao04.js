/* Crie um programa que faça o cadastro de uma pessoa. O programa deve receber os seguintes dados:
nome completo;
idade;
altura;
metros caminhados no dia */

const readlineSync = require("readline-sync");

let pessoa = {
    nomeCompleto: "",
    idade: 0,
    altura: 0,
    metroPorDia: 0
};

pessoa.nomeCompleto = readlineSync.question("Nome: ")
pessoa.idade = readlineSync.question("Idade: ")
pessoa.altura = readlineSync.question("Altura: ")
pessoa.metroPorDia = readlineSync.question("Metro por dia:")

console.log("\n \n Resultado \n \n Nome: " + pessoa.nomeCompleto +"\n Idade: "+ pessoa.idade + "\n Altura: " + pessoa.altura+ "\n Metro por dia: " + pessoa.metroPorDia)