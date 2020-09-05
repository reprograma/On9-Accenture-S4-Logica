let cadastro = {
    nome: "Milena de Almeida",
    idade: "",
    altura: 1.65,
    metrosCaminhadosNoDia: "",

    apresentação: function (idade,metros_caminhados){
        let idade_caso1 = " ano"
        if(idade === 1){
            cadastro.idade = idade + idade_caso1
        }
        else{
            idade_caso1 = " anos"
            cadastro.idade = idade + idade_caso1
        }
        let metros_caso2 = " metro"
        if(metros_caminhados === 1){
            cadastro.metrosCaminhadosNoDia = metros_caminhados + metros_caso2
        }
        else{
            metros_caso2 = " metros"
            cadastro.metrosCaminhadosNoDia += metros_caminhados += metros_caso2
        } 
        return `Olá, eu sou ${cadastro.nome}, tenho ${cadastro.idade},  minha altura é ${cadastro.altura} e só hoje, eu já caminhei ${cadastro.metrosCaminhadosNoDia}!`
    }
}

console.log(cadastro.apresentação(22, 80));