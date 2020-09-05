let pessoa = {
    nomeCompleto:"Rebeca Coelho",
    idade: 26,
    altura: 1.69,
    metrosCaminhadosDia: 186,

apresentacao: function (ano, caminhado) {   
let idadeValidacao = " ano"
if (anos == 1){
    pessoa.idade += ano += idadeValidacao
}
else{
    idadeValidacao = " anos"
    pessoa.idade += ano += idadeValidacao
}
let metrosValidacao = " metro"
if (caminhado == 1){
    pessoa.idade.metrosCaminhadosDias += caminhado += metrosValidacao
}
else{
    metrosValidacao = " metros"
    pessoa.metrosCaminhadosDia += caminhado += metrosValidacao
}

return "Olá, eu sou " + nomeCompleto + ", tenho " + idade + " anos, minha altura é " + altura + " e só hoje, eu já caminhei " + metrosCaminhadosDia + "metros!";
}
}

console.log(pessoa.apresentacao())


