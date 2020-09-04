/* 
3. Crie uma função que retorna a soma dos elementos de um array.
Exemplo:

```let array = [1,2,3,4,5]
 //soma = 1 + 2 + 3 + 4 + 5 = 15
``` */

let array = [1, 2, 3, 4, 5];
let somando = 0;

function soma(listaDeNumeros) {
    for (let index = 0; index < listaDeNumeros.length; index++) {
        somando += listaDeNumeros[index];
    }
    return somando;
}

console.log(soma(array));

// node entrega/exercicio03.js