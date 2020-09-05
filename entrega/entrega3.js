//Crie uma função que retorna a soma dos elementos de um array

function Somar(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 2) {
            total += array[i];
        }
    }
    return total;
}
var array = [2, 4, 6, 8, 10];
console.log(Somar(array));