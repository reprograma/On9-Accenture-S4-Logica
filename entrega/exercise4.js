const readlineSync = require("readline-sync");

let register = {
  fullName: "",
  age: "",
  height: "",
  meterPerDay: "",
};

register.fullName = readlineSync.question("Digite seu nome completo:");
register.age = Number(readlineSync.question("Digite sua idade:"));
register.height = Number(readlineSync.question("Digite sua altura:"));
register.meterPerDay = Number(readlineSync.question("Digite quantos metros voce caminhou hoje:"));

console.log(register);