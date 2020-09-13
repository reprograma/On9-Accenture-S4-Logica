const readlineSync = require("readline-sync");
console.log("cadastro");

let person = {
  fullName: "",
  age: 0,
  height: 0,
  distance: 0,
  presentation: function () {
    let ageString = "ano";

    let distanceString = "metrs";
    if (this.age > 1) {
      ageString = "anos";
    }

    if (this.distance > 1) {
      distanceString = "metros";
    }
    return `Olá, eu sou ${this.fullName}, tenho ${this.age} ${ageString}, minha altura é ${this.height} e só hoje já caminhei ${this.distance} ${distanceString}!`;
  },
};

person.fullName = readlineSync.question("Nome completo: ");
person.age = Number(readlineSync.question("Idade: "));
person.distance = Number(readlineSync.question("Metros caminhados no dia: "));

console.log(person.presentation());
