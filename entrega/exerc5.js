const readlineSync = require("readline-sync");

let pessoa = {

nome: "Camila",
idade: "32", 
altura: "1.45",
metrosCaminhadosDia: "1000",
apresentaçao: function descriçao () {
    return `Olá, eu sou ${pessoa.nome}, tenho ${pessoa.idade} anos, minha altura é ${pessoa.altura} e só hoje, eu já caminhei ${pessoa.metrosCaminhadosDia} metros.`
}

}
console.log(pessoa.apresentaçao());