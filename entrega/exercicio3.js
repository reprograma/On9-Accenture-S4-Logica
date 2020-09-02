function somar() {
    let numbers = [1, 2, 3, 4, 5];
    let soma = 0;

    for (index = 0; index < numbers.length; index++) {
        soma = soma + numbers[index];
    };
    console.log(soma);
};

somar();