let soma = [1, 2, 3, 4, 5];

function somatoria(array) {
    let resultado = 0;
    for(let index = 0; index < array.length; index++){

        resultado += array[index];
    }

    console.log(resultado);
}
    somatoria(soma);