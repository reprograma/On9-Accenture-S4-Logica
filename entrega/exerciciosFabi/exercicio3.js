/* Crie uma função que retorna a soma dos elementos de um array. Exemplo:
    //soma = 1 + 2 + 3 + 4 + 5 = 15 */

console.log("=================Versão 1:Array.reduce()=================\n")
let numeros=[1,2,3,4,5]

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numeros.reduce(reducer));

console.log("\n=================Versão 2=================\n")

const numeros = [1,2,3,4,5]

function soma (array){
    let somaElementos = 0

    for (let index = 0; index < array.length; index++){
        somaElementos + array[numeros]
    }
    
    return somaElementos
}

console.log(soma(numeros))