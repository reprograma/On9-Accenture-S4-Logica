const input = require("readline-sync");
const readlineSync = require("readline-sync");

let pessoa = {
    nome: " ",
    idade: " ",
    altura: " ",
    metros: " ",
}

pessoa.nome = readlineSync.question("Nome completo:")
pessoa.idade = readlineSync.question("Idade:")
pessoa.altura = readlineSync.question("Altura:")
pessoa.metros = readlineSync.question("Metros caminhados no dia:")

console.log(pessoa)

/*let pessoa = {
    nomeA: [],
    cadastroNome: function nomeCompleto(nome) {
        pessoa.nomeA.push(nome) },
    idadeA: [],
    cadastroIdade: function idadeC(idade) {
        pessoa.idadeA.push(idade) },
    alturaA: [],
    cadastroAltura: function alturaC(altura) {
        pessoa.alturaA.push(altura) },
    metrosA: [],
    cadastroMetrosCaminhados: function metrosC(metros) {
        pessoa.metrosA.push(metros) },   
}


pessoa.cadastroNome(nome)
pessoa.cadastroIdade(idade)
pessoa.cadastroAltura(altura)
pessoa.cadastroMetrosCaminhados(metros)

console.log("Cadastro \n Nome completo: " + pessoa.nomeA + "\n Idade: " + pessoa.idadeA + "\n Altura: "+ pessoa.alturaA + "\n Metros Caminhados no dia: " + pessoa.metrosA )*/

