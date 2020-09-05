const readlineSync = require("readline-sync");

let pessoa = {
    nome: "",
    idade: 0,
    altura: 0,
    metrosporDia: 0,

   apresentacao: function pluralSingular( ){
     let metro = "metro"; 
     let ano = "ano";
     if (pessoa.idade > 1 ) {
     ano = "anos";
     } 
     if (pessoa.metrosporDia > 1){   
     metro = "metros";
     }

     return `Olá, eu sou ${pessoa.nome} tenho ${pessoa.idade} ${ano} minha altura é ${pessoa.altura} e só hoje, eu já caminhei ${pessoa.metrosporDia} ${metro} !`;
  }

}
pessoa.nome = readlineSync.question("Qual o seu nome completo? ");
pessoa.idade = readlineSync.question("Quantos anos voce tem? ");
pessoa.altura = readlineSync.question("Qual a sua altura? ");
pessoa.metrosporDia = readlineSync.question("Quantos metros voce caminha por dia? ");

console.log(pessoa.apresentacao( ));

