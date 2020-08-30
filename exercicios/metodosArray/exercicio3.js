let sorvetes = [
  "Coco",
  "Maracujá",
  "Abacaxi",
  "Baunilha",
  "Tangerina",
  "Doce de Leite",
  "Iogurte de frutas vermelhas",
  "Melancia",
  "Chocolate",
  "Chocolate Belga",
  "Torta de limão",
];
console.log("Antes");
console.log("----------");
console.log(sorvetes);
console.log("Depois");
console.log("----------");
sorvetes.splice(6, 1, "Paçoquita", "Passas ao rum");
console.log(sorvetes);
