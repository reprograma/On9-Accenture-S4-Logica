//4.Crie um programa que faça o cadastro de uma pessoa.
//O programa deve receber os seguintes dados:

//- nome completo;
//- idade;
//- altura;
//- metros caminhados no dia


const readlineSync = require("readline-sync");

let cadastroDePessoas = {

  nome: '',
  idade: '',
  altura: '',
  metrosPorDia: '', 

}

cadastroDePessoas.nome = readlineSync.question("Digite o seu nome: ");
cadastroDePessoas.idade = readlineSync.question("Digite a sua idade: ");
cadastroDePessoas.altura = readlineSync.question("Digite sua altura: ");
cadastroDePessoas.metrosPorDia = readlineSync.question("Quantos metros voce caminhou por dia? ");

console.log(cadastroDePessoas);