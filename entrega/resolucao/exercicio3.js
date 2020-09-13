let array = [1, 2, 3, 4, 5];
function sum(arrayList) {
  let result = 0;
  for (let counter = 0; counter <= arrayList.length; counter++) {
    result += counter;
  }
  return result;
}

console.log(sum(array));
