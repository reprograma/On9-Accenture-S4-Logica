const readlineSync = require("readline-sync");

let person = {
  fullName: "",
  age: "",
  height: "",
  meterPerDay: "",
  presentation: function () {
    let year = "anos";
    let meter = "metros";
    if (person.age === 1) {
      year = "ano";
    }
    if (person.meterPerDay === 1) {
      meter = "metro";
    }
    return `Olá, eu sou ${this.fullName}, tenho ${this.age} ${year}, minha altura é ${this.height} metros e só hoje, eu já caminhei ${this.meterPerDay} ${meter}!`;
  },
};

person.fullName = readlineSync.question("Digite seu nome completo:");
person.age = Number(readlineSync.question("Digite sua idade:"));
person.height = Number(readlineSync.question("Digite sua altura:"));
person.meterPerDay = Number(readlineSync.question("Digite quantos metros voce caminhou hoje:"));

console.log(person.presentation());