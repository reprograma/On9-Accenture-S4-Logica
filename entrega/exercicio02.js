//2. Função disco da Xuxa, o retorno.
//Use a [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
//para determinar quais destes métodos seria o melhor para reverter elementos nesta array:

const readlineSync = require("readline-sync");

let letraXuxa = readlineSync.question("Escreva a frase que gostaria de reverter ");
console.log(letraXuxa.split("").reverse().join(""))