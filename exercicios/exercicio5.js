/*
5. Top 5 dos melhores sabores
   Considere o seguinte array:

```javascript
let sabores = ["Limão", "Milho", "Napolitano", "Maracujá"];
```

Escreva uma funcão chamada `topissimos()` que recebe um array como parâmetro.

Retorne `true` ou `false` dependendo de o array ter pelo menos 5 sabores.

> dica: Modifique o array para validar se sua função está retornando o valor correto.

Imprima no console o resultado.
*/

let sabores = ["Limão", "Milho", "Napolitano", "Maracujá"]

function topissimos(sorvete){
    if (sorvete.length <= 4) {
        console.log(true)
    }
    else{
        console.log(false)
    }
} console.log(topissimos(sabores))