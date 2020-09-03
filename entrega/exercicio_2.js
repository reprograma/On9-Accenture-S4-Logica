const readlineSync = require('readline-sync');

const reverseMe = ['h', 'e', 'l', 'l', 'o'];

function inverteTexto() {
	let copia = reverseMe.slice(0, 5);
	let invertido = copia.reverse();
	console.log(`O array ${reverseMe} invertido é ${invertido}.`);
}

inverteTexto();
