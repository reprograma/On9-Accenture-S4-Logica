/** Exercício 4 - Crie um programa que faça o cadastro de uma pessoa. O programa deve receber os seguintes dados:
nome completo;
idade;
altura;
metros caminhados no dia
 * 
 */

const readlineSync = require('readline-sync');

let pessoa = {
    nomeCompleto: readlineSync.question("Digite seu nome completo: "),
    idade: readlineSync.question("Digite sua idade: "),
    altura: readlineSync.question("Digite sua altura: "),
    metrosCaminhados: readlineSync.question("Digite a quantidade de metros caminhados no dia: "),
}
console.log(pessoa.nomeCompleto);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.metrosCaminhados);


