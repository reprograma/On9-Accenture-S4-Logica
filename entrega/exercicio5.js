const readlineSync = require("readline-sync");
let cadastroPessoa = { 
    nome: "",
    idade:"" ,
    altura:"" ,
    caminhadaDiaria:"" ,
}
cadastroPessoa.nome = readlineSync.question("Qual o seu nome completo? ");
cadastroPessoa.idade = Number(readlineSync.question("Qual sua idade? "));
cadastroPessoa.altura = Number(readlineSync.question("Qual sua altura? "));
cadastroPessoa.caminhadaDiaria = Number(readlineSync.question("Quantos metros voce andou hoje? "));

console.log(cadastroPessoa)

function apresentacao(idade,caminhadaDiaria){
    let mostrarIdade = " anos"
    if(idade !== 1){
        cadastroPessoa.idade = idade + mostrarIdade
    } else {
        mostrarIdade = " ano"
        cadastroPessoa.idade = idade + mostrarIdade
    }
    let mostrarCaminhada = " metros"
    if(idade !== 1){
        cadastroPessoa.caminhadaDiaria = caminhadaDiaria + mostrarCaminhada
    } else {
        mostrarCaminhada = " metro"
        cadastroPessoa.caminhadaDiaria = caminhadaDiaria + mostrarCaminhada
    }
    return `Olá, eu sou ${cadastroPessoa.nome}, tenho ${cadastroPessoa.idade},  minha altura é ${cadastroPessoa.altura} e só hoje, eu já caminhei ${cadastroPessoa.caminhadaDiaria}!`
}
console.log(apresentacao(cadastroPessoa.idade, cadastroPessoa.caminhadaDiaria))