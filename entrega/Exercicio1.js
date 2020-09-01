const input = require("readline-sync");
const readlineSync = require("readline-sync");

//["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1);
rainbow.splice(2,0, "Yellow", "Green");
rainbow.splice(5,0, "Purple");

console.log(rainbow)