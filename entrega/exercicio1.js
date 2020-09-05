const readlineSync = require("readline-sync");

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice (2,1,);
console.log (rainbow);
rainbow.splice (4,0, "Yellow", "Green");
console.log (rainbow);
rainbow.splice (5,0,"Purple");
console.log (rainbow)