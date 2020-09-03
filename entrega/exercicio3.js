const elementos = [1, 2, 3, 4, 5];
const total = soma(elementos);
console.log(
  " O total da soma dos números do array " + elementos + " foi de " + total
);

function soma(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
