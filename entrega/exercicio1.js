

//exercicio 1
//Usando somente o método `splice()`, insira as cores que faltam na array e remova a cor "Blackberry", 


let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2,1, "Yellow", "Green");

rainbow.splice(5,0, "Purple")

console.log(rainbow)
