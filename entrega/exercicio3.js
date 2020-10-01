/*
3. Crie uma função que retorna a soma dos elementos de um array.
   Exemplo:

```let array = [1,2,3,4,5]
    //soma = 1 + 2 + 3 + 4 + 5 = 15
*/

let array = [1,2,3,4,5]
let total = 0;

function soma(){
    for (index = 0; index < array.length;index ++)
    total += array[index];
    return(total);
}
console.log(soma())