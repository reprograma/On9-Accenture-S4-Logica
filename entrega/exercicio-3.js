/* Crie uma função que retorna a soma dos elementos de um array. Exemplo:
    //soma = 1 + 2 + 3 + 4 + 5 = 15 */

let numeros = [1, 2, 3, 4, 5];
let soma = 0;

function somaElementos(array) {
  for (let index = 0; index < array.length; index++) {
    soma += array[index];
  }
  console.log(`A soma dos elementos do array é: ${soma}`);
}

somaElementos(numeros);
