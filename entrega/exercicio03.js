//3. Crie uma função que retorna a soma dos elementos de um array.
//   Exemplo:
//```let array = [1,2,3,4,5]
//    //soma = 1 + 2 + 3 + 4 + 5 = 15
//```

function somar(array) {
    let total = 0;
    for (let indice = 0; indice < array.length; indice++) {
        total = total + array[indice];
    }
    return total;
}
let numeros = [6, 5, 1, 2];
console.log(somar(numeros));
