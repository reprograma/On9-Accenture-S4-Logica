let numeros = [ 5, 3, 7, 11, 2, 25]

function soma (array){
    
    let total = 0

for(let index = 0; index < array.length; index++){
    total = total + array[index]

}
return total
}

console.log(soma(numeros));

