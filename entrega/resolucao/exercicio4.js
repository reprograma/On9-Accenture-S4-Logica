const readlineSync = require("readline-sync");
console.log("cadastro");

let person = {
  fullName: "",
  age: 0,
  metersByDay: 0,
};

person.fullName = readlineSync.question("Nome completo: ");
person.age = Number(readlineSync.question("Idade: "));
person.metersByDay = Number(
  readlineSync.question("Metros caminhados no dia: ")
);

console.log("cadastro efetuado com sucesso!");
