const readlineSync = require("readline-sync");

let sabores = [];
let opcaoSair;

while (opcaoSair !== 0) {
  let input = readlineSync.question("Digite um sabor ou 0 para sair : \n");
  if (input === "0") {
    opcaoSair = 0;
    break;
  } else {
    sabores.push(input);
  }
}

console.log("\n\nLista de sabores");
console.log("================");
for (let index = 0; index < sabores.length; index++) {
  console.log(sabores[index]);
}
