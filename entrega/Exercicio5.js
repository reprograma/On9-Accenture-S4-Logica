const input = require("readline-sync");
const readlineSync = require("readline-sync");

let pessoa = {
    nome: " ",
    idade: " ",
    idadeC(){
        if (pessoa.idade == 1){
            return "ano"
        }else {
            return "anos"           
        }
    }, 
    altura: " ",
    metros:" ",
    metrosC(){
        if (pessoa.metros == 1){
            return "metro"          
        }else {
            return "metros"
        }
    },
    apresentação(){
        return "Olá, eu sou "+pessoa.nome+", tenho "+pessoa.idade+ " " + pessoa.idadeC() +" , minha altura é "+pessoa.altura+" e só hoje, eu já caminhei "+pessoa.metros+ " "+pessoa.metrosC()+" !"     
    },
}

pessoa.nome = readlineSync.question("Nome completo:")
pessoa.idade = Number(readlineSync.question("Idade:"))
pessoa.altura = readlineSync.question("Altura:")
pessoa.metros = Number(readlineSync.question("Metros caminhados no dia:"))

console.log(pessoa.apresentação())