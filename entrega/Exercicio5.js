
let pessoa = {
    nomeCompleto: "Luana Cristina de A Silva",
    idade: 38,
    altura: 168,
    metrosCaminhadosPorDia: 4000,
    apresentacao: function exibirApresentacao() {
       if(this.idade !== 1 && this.metrosCaminhadosPorDia !== 1){
            return ("Olá, eu sou " + this.nomeCompleto + ", tenho " + this.idade + " anos, minha altura é " + this.altura + " e só hoje, eu já caminhei " + this.metrosCaminhadosPorDia + " metros.");
        }else{
            return ("Olá, eu sou " + this.nomeCompleto + ", tenho " + this.idade + " ano, minha altura é " + this.altura + " e só hoje, eu já caminhei " + this.metrosCaminhadosPorDia + " metro.");
        }
        
}

};
pessoa.apresentacao();