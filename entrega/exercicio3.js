//exercicio 3

//3. Crie uma função que retorna a soma dos elementos de um array.
//   Exemplo:
//let array = [1,2,3,4,5]
//soma = 1 + 2 + 3 + 4 + 5 = 15

let array = [1,2,3,4,5]

function soma(numeros) {

let total = 0 

for(let index = 0; index < numeros.lenght; index++) {
    
    total = 0 + numeros[index]

}
return total
}
console.log(soma(1,2,3,4,5));

