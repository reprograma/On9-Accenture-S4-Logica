let readlineSync = require("readline-sync");

let pessoa = {
    nome:"",
    idade: 0,
    altura: 0,
    metrosCaminhadosDia: 0,
    apresentacao:function(){
        let idadeSingularPlural = "";
        let metrosSingularPlural = "";
    if(pessoa.idade == 1){
        idadeSingularPlural = "ano";
    }else{
        idadeSingularPlural = "anos";
    };
    if(pessoa.metrosCaminhadosDia ==1){
        metrosSingularPlural = "metro";
    }else{
        metrosSingularPlural = "metros";
    }
    return `Olá, eu sou ${pessoa.nome}, tenho ${pessoa.idade} ${idadeSingularPlural}, minha altura é ${pessoa.altura} e, só hoje, eu já caminhei ${pessoa.metrosCaminhadosDia} ${metrosSingularPlural}!` 
    },
    };
    
pessoa.nome = readlineSync.question("Digite aqui seu nome: ");
pessoa.idade = readlineSync.question("Quantos anos você tem?");
pessoa.altura = readlineSync.question("Qual a sua altura?");
pessoa.metrosCaminhadosDia = readlineSync.question("Quantos metros você caminhou hoje?"); 
console.log(pessoa.apresentacao());