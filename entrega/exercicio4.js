const readlineSync = require("readline-sync");


let cadastro = {
    nome_completo: readlineSync.question('Digite seu nome completo:  '),
    idade: readlineSync.question('Digite a sua idade: ' ),
    altura: readlineSync.question('Digite a sua altura (em metros): ' ),
    metros_caminhados_no_dia : readlineSync.question('Digite a quantidade (em metros) que você caminhou hoje: ' ),
  };
 
console.log("==============================="); 
console.log( "INFORMAÇÕES SOBRE SEU CADASTRO");
console.log("===============================");
console.log(cadastro);