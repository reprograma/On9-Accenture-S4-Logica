/* 4. Crie um programa que faça o cadastro de uma pessoa.
   O programa deve receber os seguintes dados:

- nome completo;
- idade;
- altura;
- metros caminhados no dia */

const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite seu nome completo: "); 

const idade = readlineSync.question("Digite a sua idade: ")

const altura = readlineSync.question("Digite a sua altura: ")

const metro = readlineSync.question("Digite qto metros vc caminha por dia: ")

let dados = [];
dados.push(nome);
dados.push(idade);
dados.push(altura);
dados.push(metro);

console.log("Dados Cadastrados:  "+dados)

