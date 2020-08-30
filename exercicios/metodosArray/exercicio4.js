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

sorvetes.pop();
sorvetes.pop();
sorvetes.pop();
sorvetes.pop();
sorvetes.pop();
sorvetes.pop();
sorvetes.pop();
sorvetes.pop();

// outra maneira de fazer a mesma coisa
sorvetes.splice(3, 8);
console.log(sorvetes);
