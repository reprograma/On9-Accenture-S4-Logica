let pessoa = {
    Nome:"Glória",
    Idade: 23,
    Altura: 1.65,
    metrosPorDia: 200,

    apresentação: function descrição(idade, metrosPorDia){
        let idadeConcordância = "",
        if(idade == 1){
            idadeConcordância = "ano"
        } else{
            idadeConcordância = "anos"
        }
        let metrosConcordância = "",
        if(metrosPorDia == 1){
            metrosConcordância = "metro"
        } else{
            metrosConcordância = "metros"
        }
        return "Olá, eu sou a " + (pessoa.Nome) + ", tenho " + (pessoa.Idade) + idadeConcordância + ", minha altura é " + (pessoa.Altura) + "m" + "e, só hoje, eu já caminhei" + (pessoa.metrosPorDia) + metrosConcordância
    
    }console.log(pessoa.apresentação())

//o código não funciona e eu não consigo encontrar o erro :(, vou tentar encontrar ao longo da semana 