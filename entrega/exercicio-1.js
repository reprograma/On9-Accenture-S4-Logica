/* James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:
let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
mas James tinha isto: let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

Usando somente o método splice(), insira as cores que faltam na array e remova a cor "Blackberry", seguindo estes passos:

Remova "Blackberry" Adicione "Yellow" e "Green" Adicione "Purple" */

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");

rainbow.splice(5, 0, "Purple");

console.log(rainbow);
