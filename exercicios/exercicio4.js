/*
4. (Utilize o array acima para fazer este exercício)

Faremos um evento corporativo e por isso reduziremos nosso cardápio, levando apenas os 3 primeiros sabores da nossa lista. Remova todos os outros sabores.
*/

let sorvete = [
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
]

sorvete.splice(3,8)

console.log(sorvete) 