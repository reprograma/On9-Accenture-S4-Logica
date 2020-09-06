const readlyneSync = require("readline-Sync");

const inverter = readlyneSync.question("Digite o texto: ");

let textoInvertido = "";

for (let index = inverter.length - 1; index >=0; index--) {
    textoInvertido += inverter[index]; 
}

console.log(textoInvertido);
