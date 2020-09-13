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

console.log(apresentacao(cadatroDePessoa));

function apresentacao(pessoa) {
  let labelAnos = "anos";
  let labelQtdMetros = "metros";
  if (pessoa.idade === 1) {
    labelAnos = "ano";
  }
  if (pessoa.metrosCaminhadosNoDia === 1) {
    labelQtdMetros = "metro";
  }

  return `Olá, eu sou ${pessoa.nome}, tenho ${pessoa.idade} ${labelAnos}, minha altura é ${pessoa.altura} e só hoje, eu já caminhei ${pessoa.metrosCaminhadosNoDia} ${labelQtdMetros}`;
}
