// Crie um método para o objeto pessoa chamado apresentacao. Esse método deve retornar a string:
//"Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

let cadastroPessoaFisica = {
    nomeCompleto: "Danielle Clericuzi",
    idade: 31,
    altura: 1.59,
    metrosCaminhadosDia: 5,
    apresentacao: function () {
        if (idade == 1) {
        console.log("Olá, eu sou " + this.nomeCompleto + " tenho " + this.idade + "ano", "minha altura é " + this.altura + " e só hoje, eu já caminhei " + this.metrosCaminhadosDia + " metros!");
        } else {
        console.log("Olá, eu sou " + this.nomeCompleto + " tenho " + this.idade + "ano", "minha altura é " + this.altura + " e só hoje, eu já caminhei " + this.metrosCaminhadosDia + " metros!");
        }
    }
}

cadastroPessoaFisica.apresentacao();