const readlineSync = require("readline-sync");

let cadatroDePessoa = {
  nome: "",
  idade: "",
  altura: "",
  metrosCaminhadosNoDia: "",
};

cadatroDePessoa.nome = readlineSync.question("Digite seu nome completo: ");
cadatroDePessoa.idade = Number(readlineSync.question("Digite sua idade: "));
cadatroDePessoa.altura = Number(readlineSync.question("Digite sua altura: "));
cadatroDePessoa.metrosCaminhadosNoDia = Number(
  readlineSync.question("Digite a quantidade de metros caminhados no dia: ")
);

console.log(
  "Cadastro realizado com Sucesso! Seus dados cadastrador foram: " +
    JSON.stringify(cadatroDePessoa)
);
