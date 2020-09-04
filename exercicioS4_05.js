let readlineSync = require("readline-sync");

let pessoa = {
    nome:"",
    idade: 0,
    altura: 0,
    metrosCaminhadosDia: 0,
    apresentacao:function(){
    if(pessoa.idade == 1 && pessoa.metrosCaminhadosDia == 1){
        return "Olá, eu sou " + pessoa.nome + " tenho " + pessoa.idade + " ano, minha altura é " + pessoa.altura + " e só hoje, eu já caminhei " + pessoa.metrosCaminhadosDia + " metro!"
    }if(pessoa.idade == 1){
        return "Olá, eu sou " + pessoa.nome + " tenho " + pessoa.idade + " ano, minha altura é " + pessoa.altura + " e só hoje, eu já caminhei " + pessoa.metrosCaminhadosDia + " metros!"
    }if(pessoa.metrosCaminhadosDia == 1){
        return "Olá, eu sou " + pessoa.nome + " tenho " + pessoa.idade + " anos, minha altura é " + pessoa.altura + " e só hoje, eu já caminhei " + pessoa.metrosCaminhadosDia + " metro!"
    }else{
        return "Olá, eu sou " + pessoa.nome + " tenho " + pessoa.idade + " anos, minha altura é " + pessoa.altura + " e só hoje, eu já caminhei " + pessoa.metrosCaminhadosDia + " metros!"
    }   
    },
    };
    
pessoa.nome = readlineSync.question("Digite aqui seu nome: ");
pessoa.idade = readlineSync.question("Quantos anos você tem?");
pessoa.altura = readlineSync.question("Qual a sua altura?");
pessoa.metrosCaminhadosDia = readlineSync.question("Quantos metros você caminhou hoje?"); 
console.log(pessoa.apresentacao());