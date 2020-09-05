const readlineSync = require("readline-sync")

let pessoa = {
    name: readlineSync.question("Nome completo: "),
    age: parseInt(readlineSync.question("Idade: ")),
    height: parseFloat(readlineSync.question("Altura: ")),
    metersWalked: parseFloat(readlineSync.question("Metros Caminhados hoje: ")),
    apresentacao: function(){
        let nome, idade, altura, metros
        nome = "Olá, eu sou " + pessoa.name + ", "
        if(pessoa.age === 1){
            idade = "tenho " + pessoa.age + " ano, "
        }else{
            idade = "tenho " + pessoa.age + " anos, "
        }
        altura = "minha altura é " + pessoa.height 
        if(pessoa.metersWalked === 1){
            metros = " e só hoje, eu já caminhei " + pessoa.metersWalked + " metro!"
        }else{
            metros = " e só hoje, eu já caminhei " + pessoa.metersWalked + " metros!"
        }
        return nome + idade + altura + metros
    }
};

console.log(pessoa.apresentacao())