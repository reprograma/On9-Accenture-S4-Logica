/* Crie uma função que retorna a soma dos elementos de um array. Exemplo:
    //soma = 1 + 2 + 3 + 4 + 5 = 15 */

let sumElements = [2, 3, 5, 8, 10, 4, 7];

let result = sumElements.reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual;
});
console.log(result);