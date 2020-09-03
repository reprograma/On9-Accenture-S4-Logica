const readlineSync = require('readline-sync');

let array = [1, 2, 3, 4, 5];

function somaArray(array) {
	let total = 0;
	let contador = 0;
	while (contador < array.length) {
		total = total + array[contador];
		contador++;
	}
	console.log(total);
}

somaArray(array);
