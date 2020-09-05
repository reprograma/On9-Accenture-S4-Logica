let cadastroPessoa = {
    nomeCompleto: "Eliane Silva",
    idade: "",
    altura: 1.67,
    metrosCaminhadosDia: "",

    apresentação: function (years,walking){
        let idadeValidação = " ano"
        if(years== 1){
            cadastroPessoa.idade += years += idadeValidação
        }
        else{
            idadeValidação = " anos"
            cadastroPessoa.idade += years += idadeValidação
        }
        let metrosValidação = " metro"
        if(walking == 1){
            cadastroPessoa.metrosCaminhadosDia += walking += metrosValidação
        }
        else{
            metrosValidação = " metros"
            cadastroPessoa.metrosCaminhadosDia += walking += metrosValidação
        } 
        return `Olá, eu sou ${cadastroPessoa.nomeCompleto}, tenho ${cadastroPessoa.idade} minha altura é ${cadastroPessoa.altura} e só hoje, eu já caminhei ${cadastroPessoa.metrosCaminhadosDia}!`
    }
}

console.log(cadastroPessoa.apresentação(29, 15))