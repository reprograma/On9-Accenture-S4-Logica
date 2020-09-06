const readlineSync = require("readLine-sync");

let cadastro = {
    name: "",
    age: "",
    stature: "",
    metros: "",
}

cadastro.name = readlineSync.question("Digite seu nome: ")
cadastro.age = Number(readlineSync.question("Agora digite sua idade: "))
cadastro.stature = parseFloat(readlineSync.question("Agora digite sua altura: "))
cadastro.metros = parseFloat(readlineSync.question("Quantos metros você caminha por dia? "))
console.log(cadastro)