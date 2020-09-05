const readlineSync = require("readline-sync");

let numeros = [5, 10, 15, 20, 25, 30];

function soma(numeros){
    let total = 0
for(let index = 0; index < numeros.length; index++){
    total = total + numeros[index]    
    
}    
return total
}

console.log ("Valor da soma dos numeros:")
console.log(soma(numeros));