const readlineSync = require("readline-sync");

let people = {

    name: '',
    age: '',
    height: '',
    meterPerDay: '', 
    
}

people.name = readlineSync.question("Digite o seu nome: ");
people.age = readlineSync.question("Digite a sua idade: ");
people.height = readlineSync.question("Digite sua altura: ");
people.meterPerDay = readlineSync.question("Quantos metros voce caminhou por dia? ");



console.log(people);

