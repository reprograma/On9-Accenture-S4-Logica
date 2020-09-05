const readlineSync = require("readline-sync");

function adicao () {
    let numerosArray = [1, 2, 3, 4, 5];
    let soma = 0;

    for (index = 0; index < numerosArray.length; index++) {
        soma = soma + numerosArray[index];
    };
    console.log(soma);
};
adicao()
