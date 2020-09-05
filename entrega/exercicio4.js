//exercicio 4
//4. Crie um programa que faça o cadastro de uma pessoa.
//O programa deve receber os seguintes dados:
//- nome completo;
//- idade;
//- altura;
//- metros caminhados no dia

const readlineSync = require("readline-sync");

let cadastro = {
    nomeCompleto:"",
    idade:"",
    altura:"",
    metrosCaminhadosNoDia:""
}

cadastro.nomeCompleto = readlineSync.question("digite seu nome completo: ");
cadastro.idade = (readlineSync.question("qual sua idade? "));
cadastro.altura = (readlineSync.question("qual sua altura? "));
cadastro.metrosCaminhadosNoDia = (readlineSync.question("quantos metros voce caminhou hoje? "));

console.log(cadastro)

