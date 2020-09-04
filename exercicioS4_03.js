let numeros = [1, 2, 3, 4, 5, 6];
let soma= numeros.reduce(function calcular(soma,numeros){
    return soma+=numeros
},0);
console.log(soma);