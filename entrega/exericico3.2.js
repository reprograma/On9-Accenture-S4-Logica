let numeros = [5, 10, 15, 20, 25, 30];
let soma = 0

function somar (itemSeparado){
    soma += itemSeparado;

}
numeros.forEach (somar);
console.log ("Valor total da soma dos numeros foi:")
console.log(soma);
