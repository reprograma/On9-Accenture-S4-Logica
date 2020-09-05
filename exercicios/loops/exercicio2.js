let sorvetes = ["Baunilha", "Macadâmia", "Iogurte"];

function removeSabor(array, numero) {
  for (let index = 0; index < numero; index++) {
    array.pop();
  }
}
removeSabor(sorvetes, 1);
console.log(sorvetes);
