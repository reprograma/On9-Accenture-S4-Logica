const readlineSync = require("readline-sync");

let numeros = [5, 10, 15, 20, 25, 30];
let calculo= (accumulator, currentValue) => accumulator + currentValue;

console.log ("Valor total da soma dos numeros foi:")
console.log (numeros.reduce(calculo));





