let soma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function allSum (array) {
    let i = 0;
    let resultado = 0;

    while (i < array.length ) {

    resultado += array[i]; 

    i++;

    }


    return resultado;

}


console.log(allSum(soma));