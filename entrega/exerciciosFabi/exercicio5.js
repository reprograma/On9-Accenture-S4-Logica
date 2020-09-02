/* Crie um método para o objeto pessoa chamado apresentacao. Esse método deve retornar a string:
"Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

Se a idade for 1, a frase acima, na parte que fala da idade, vai mostrar a palavra "ano" ao invés de "anos", pois é singular;
Se a quantidade de metros caminhados for igual a 1, então a palavra que deve conter no retorno da frase acima é "metro" no lugar de "metros".
Para cada validação, você irá declarar uma variável localmente (dentro do método), que será concatenada com a frase de retorno, 
mostrando a resposta correta, de acordo com os dados inseridos no objeto. */

const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite seu nome completo: "); 

let idade = readlineSync.question("Digite a sua idade: ")

const altura = readlineSync.question("Digite a sua altura: ")

let metro = readlineSync.question("Digite qto metros vc caminha por dia: ")


let pessoa = {
    nombre: nome,
    edadprimero: idade,
    edad: function () {
        let suaIdade = idade 
        if( suaIdade === 1){
            return console.log("Olá, eu sou"+ nome +", tenho "+ suaIdade +" ano, minha altura é "+ altura + " e só hoje, eu já caminhei "+ metro + " metros!")
        } 
    },
    suaAltura: altura,
    metros: metro,
    caminhada: function (){
        let seusMetros = metro
        if(seusMetros === 1){
            return console.log("Olá, eu sou"+ nome +", tenho "+ idade +" ano, minha altura é "+ altura + " e só hoje, eu já caminhei "+ seusMetros + " metros!")
        }
    },
}


console.log(`Olá, eu sou ${pessoa.nombre}, tenho ${idade} anos, minha altura é ${pessoa.suaAltura} e só hoje, eu já caminhei ${metros} metros!`)



