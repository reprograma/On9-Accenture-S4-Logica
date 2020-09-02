const readlineSync = require("readline-sync");

let cadastroPessoa = {
    nome: "",
    idade: "",
    altura: "",
    metrosDia: "",
    apresentation: function () {
        let idadeSingularPlural = "";
        let metrosSingularPlural = "";

        if (this.idade === 1) {
            idadeSingularPlural =  "ano";
        } else {
            idadeSingularPlural = "anos";
        };

        if (this.metrosDia === 1) {
            metrosSingularPlural = "metro";
        } else {
            metrosSingularPlural = "metros";
        }

        return `Olá, eu sou ${cadastroPessoa.nome}, tenho ${cadastroPessoa.idade} ${idadeSingularPlural}, minha altura é ${cadastroPessoa.altura} e, só hoje, eu já caminhei ${cadastroPessoa.metrosDia} ${metrosSingularPlural}!`;
    }
};

cadastroPessoa.nome = readlineSync.question("Qual o seu nome? ");
cadastroPessoa.idade = Number(readlineSync.question("Qual a sua idade? "));
cadastroPessoa.altura = Number(readlineSync.question("Qual a sua altura? "));
cadastroPessoa.metrosDia = Number(readlineSync.question("Quantos metros você caminhou hoje? "));

console.log(cadastroPessoa.apresentation());