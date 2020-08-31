const readlineSync = require("readline-sync");

let people = {

    name: '',
    age: '',
    height: '',
    meterPerDay: '', 
    apresentation: function description () {
        return `Olá, eu sou ${people.name}, tenho ${people.age} anos, minha altura é ${people.height} e só hoje, eu já caminhei ${people.meterPerDay} metros!`
    }
    
}

people.name = readlineSync.question("Digite o seu nome: ");
people.age = readlineSync.question("Digite a sua idade: ");
people.height = readlineSync.question("Digite sua altura: ");
people.meterPerDay = readlineSync.question("Quantos metros voce caminhou por dia? ");



console.log(people.apresentation());
