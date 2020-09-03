const readlineSync = require('readline-sync');

let pessoa = {
    nomeCompleto: '' ,
    idade: 0,
    altura: 0, 
    metrosCaminhados: 0,

    apresentacao: function () {
        let = IdadeNoSingularOuPlural = 'anos';
        let = DistanciaSingularOuPlural = 'metros';

        if (this.idade === '1') {
            IdadeNoSingularOuPlural = 'ano';
        }
        if (this.metrosCaminhados === '1') {
            DistanciaSingularOuPlural = 'metro'
        }
        console.log(`Olá! Eu sou ${this.nomeCompleto}, tenho ${this.idade} ${IdadeNoSingularOuPlural}, minha altura é ${this.altura}m e - só hoje - caminhei ${this.metrosCaminhados} ${DistanciaSingularOuPlural}`)


    }
}

pessoa.nomeCompleto = readlineSync.question("Qual e o seu nome completo?: ");
pessoa.idade = readlineSync.question("Qual e a sua idade(digite apenas numeros)?: ")
pessoa.altura = readlineSync.question("Qual e a sua altura(digite apenas numeros)?: ");
pessoa.metrosCaminhados = readlineSync.question("Qual foi a distancia percorrida?: ");

pessoa.apresentacao()
