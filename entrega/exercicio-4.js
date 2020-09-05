const readlineSync = require("readline-sync")

let pessoa = {
    name: readlineSync.question("Nome completo: "),
    age: parseInt(readlineSync.question("Idade: ")),
    height: parseFloat(readlineSync.question("Altura: ")),
    metersWalked: parseFloat(readlineSync.question("Metros Caminhados hoje: "))
  };