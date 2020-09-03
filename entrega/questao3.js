
let numerosSortidos = [0,4,22,35,48,51,69,82,154,210];
let soma = 0;

function somadosElementos(arrayDeNumeros){

    for(let index = 0; index < arrayDeNumeros.length; index++){
        soma = (soma + arrayDeNumeros[index]);

    }
    console.log(`A soma dos itens da array {${arrayDeNumeros}} é ${soma}`)
}

somadosElementos(numerosSortidos);