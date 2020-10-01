/*
2. Escreva uma função que recebe 2 parametros: array e número.
   Você deverá usar um laço de repetição para remover do array a quantidade exata passada como parametro da função.

Por fim, imprima no console o array modificado pela sua função
Exemplo:

```javascript
let sorvetes = ["Chocolate", "Creme", "Iogurte"];

removeSabor(sorvetes, 2);

console.log(sorvetes);
// retorna ["Chocolate]
```

*/

let sorvetes = ["Chocolate", "Creme", "Iogurte"];

function excluirSabor(posicao, quantidade){
    let index = 0; 
    while(index < sorvetes.length){
          sorvetes.splice(posicao,quantidade)
          return(sorvetes)
}
}
console.log(excluirSabor(1, 2))