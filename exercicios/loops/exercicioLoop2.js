let sorvetes = ["Chocolate", "Creme", "Iogurte"];

function removedorDeSabor(listaDeSorvetes, numero) {
  for (let index = 0; index < numero; index++) {
    listaDeSorvetes.pop();
  }
}
removedorDeSabor(sorvetes, 1);
console.log(sorvetes);
