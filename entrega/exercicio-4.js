/* Crie um programa que faça o cadastro de uma pessoa. O programa deve receber os seguintes dados:
nome completo;
idade;
altura;
metros caminhados no dia */

const readlineSync = require("readline-sync");

let pessoas = [];

const inputFullName = readlineSync.question("Qual o seu nome completo? ");
const inputAge = readlineSync.question("Qual a sua idade? ");
const inputHeight = readlineSync.question("Qual a sua altura? ");
const inputDistance = readlineSync.question(
  "Quantos metros você caminhou hoje? "
);

function cadastrar(pessoa) {
  pessoas.push(pessoa);
}

let pessoa = {
  fullName: inputFullName,
  age: inputAge,
  height: inputHeight,
  distance: inputDistance,
};

cadastrar(pessoa);
console.log(pessoas);
