
//exercicio 5

let pessoa = {
    nomeCompleto:"vivian costa",
    idade: "",
    altura: 1.78,
    metrosCaminhadosNoDia: "",

    apresentação: function (age, meters) {

        let complementoAge = " ano"
        if (age == 1) {
            pessoa.idade += age += complementoAge
        }
        else {
            complementoAge = " anos"
            pessoa.idade += age += complementoAge
        }


        let complementoMeters = " metro"
        if (meters == 1) {
            pessoa.metrosCaminhadosNoDia += meters += complementoMeters
        }
        else {
            complementoMeters = " metros"
            pessoa.metrosCaminhadosNoDia+= meters += complementoMeters
        }
        return "Olá, eu sou " +pessoa.nomeCompleto + ", tenho " + pessoa.idade + ", minha altura é " + pessoa.altura + " e só hoje, eu já caminhei " + pessoa.metrosCaminhadosNoDia + "!";
    }
}
    
console.log(pessoa.apresentação(20,500))
    
    



