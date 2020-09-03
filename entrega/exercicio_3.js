const readlineSync = require('readline-sync');

let array = [1, 2, 3, 4, 5];

function somaArray(array) {
	let total = 0;
	for (let index = 0; index < array.length; index++) {
		total = total + array[index];
	}
	console.log(total);
}

somaArray(array);
