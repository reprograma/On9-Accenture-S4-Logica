const readlineSync = require("readline-sync");

let sabores = [];

let opcaoSair;

while (opcaoSair !== 0) {
  let input = readlineSync.question(
    "Digite o sabor do sorvete ou 0 para sair:  "
  );
  if (input === "0") {
    opcaoSair = 0;
    break;
  } else {
    sabores.push(input);
  }
}
console.log("=====================");
console.log("Sabores cadastrados\n");
console.log("=====================");
for (let index = 0; index < sabores.length; index++) {
  console.log(sabores[index]);
}
