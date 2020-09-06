let cadastro = {
    nomeCompleto: "Maria",
    Idade: 20,
    Altura: 1.69,
    MetrosCaminhadosPorDia: 100,

    Apresentação: function (cadastro) {
        let nomeCompleto = ""

        let idadeSingularPlural = ""

        if (idade == 1) {
            idadeSingularPlural = "ano"
        }
        else {
            idadeSingularPlural = "anos"
        }

        let metrosSingularPlural = ""

        if (metros == 1) {
            metrosSingularPlural = "metro"
        }
        else {
            metrosSingularPlural = "metros"
        }

        let mensagem = "Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

        return Olá, eu sou a: " + (cadastro.nomeCompleto) + "tenho: " + (cadastro.Idade) + idadeSingularPlural + "minha altura é: " + (cadastro.Altura) + metrosSingularPlural + "e só hoje caminhei: " + (cadastro.MetrosCaminhadosPorDia) + metrosSingularPlural

    }

}

console.log(Apresentação(cadastro))
