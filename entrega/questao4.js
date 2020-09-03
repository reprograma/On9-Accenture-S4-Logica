const readlineSync = require('readline-sync');

// let fullName = readlineSync.question("Qual e o seu nome completo?: ");
// let age = readlineSync.question("Qual e a sua idade(digite apenas numeros)?: ");
// let height = readlineSync.question("Qual e a sua altura(digite apenas numeros)?: ");
// let walkingDistance = readlineSync.question("Quanto metros voce caminhou hoje? (digite apenas numeros) ");

let pessoa = {
    nomeCompleto: '',
    idade: 0,
    altura: 0,
    metrosCaminhados: 0
}

pessoa.nomeCompleto = readlineSync.question("Qual e o seu nome completo?: ");
pessoa.idade = readlineSync.question("Qual e a sua idade(digite apenas numeros)?: ");
pessoa.altura = readlineSync.question("Qual e a sua altura(digite apenas numeros)?: ");
pessoa.metrosCaminhados = readlineSync.question("Quanto metros voce caminhou hoje? (digite apenas numeros) ");

console.log(pessoa)