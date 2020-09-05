let numeros = [1,2,3,4,5]


function soma(array) {
    let total = 0

    for(let index = 0; index < array.length; index ++){

     total =  total + array[index]
    }
    return total
    }

    
    console.log(soma(numeros));



