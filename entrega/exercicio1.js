const readlineSync = require("readline-sync");

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 2, "Yellow", "Green", "Blue", "Purple")
console.log(rainbow)
