const readlineSync = require('readline-sync');

let numeros = [1, 2, 3, 4, 5];
let total = 0;

function somaArray(item) {
	total += item;
}

numeros.forEach(somaArray);
console.log(total);
