let pessoa = {
    nome: 'Raphaela',
    idade: 21,
    altura: 1.65,
    metros: 2,
    apresentacao: function (nome,idade,altura,metros) {
        a = pessoa.nome
        b = pessoa.idade
        c = pessoa.altura
        d = pessoa.metros
        texto = 'Olá, eu sou ' + a +', tenho '+b
        if (b === 1){
            texto = texto +' ano, minha altura é ' + c +' metros e, só hoje, eu já caminhei '
        }else{
            texto = texto +' anos, minha altura é ' + c +' metros e, só hoje, eu já caminhei '
        }
        if(d===1){
            texto = texto + d + ' metro'
        }else{
            texto = texto + d + ' metros'
        }
        return texto

    },
    
}
console.log(pessoa.apresentacao())