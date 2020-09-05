/* let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]; */
let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

console.log("Antes");
console.log("----------");
console.log(rainbow);

console.log("Depois");
console.log("----------");
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(4,1, "Blue" ,"Purple")
console.log(rainbow);