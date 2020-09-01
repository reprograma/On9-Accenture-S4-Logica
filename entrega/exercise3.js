/* Crie uma função que retorna a soma dos elementos de um array. Exemplo:
    //soma = 1 + 2 + 3 + 4 + 5 = 15 */

    let sumElements = [2, 3, 5, 8, 10, 4, 7];

    function sum(array) {
      let result = 0;
      for (index = 0; index < array.length; index++) {
        result += array[index];
      }
      return result;
    }
    console.log(sum(sumElements));