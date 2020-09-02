/* Crie um método para o objeto pessoa chamado apresentacao. Esse método deve retornar a string:
"Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

Se a idade for 1, a frase acima, na parte que fala da idade, vai mostrar a palavra "ano" ao invés de "anos", pois é singular;
Se a quantidade de metros caminhados for igual a 1, então a palavra que deve conter no retorno da frase acima é "metro" no lugar de "metros".
Para cada validação, você irá declarar uma variável localmente (dentro do método), que será concatenada com a frase de retorno, mostrando a resposta correta, de acordo com os dados inseridos no objeto. */

const readlineSync = require("readline-sync");

let pessoas = [];

const inputFullName = readlineSync.question("Qual o seu nome completo? ");
const inputAge = readlineSync.question("Qual a sua idade? ");
const inputHeight = readlineSync.question("Qual a sua altura? ");
const inputDistance = readlineSync.question(
  "Quantos metros você caminhou hoje? "
);

function cadastrar(pessoa) {
  pessoas.push(pessoa);
}

let pessoa = {
  fullName: inputFullName,
  age: inputAge,
  height: inputHeight,
  distance: inputDistance,
  apresentacao: function apresentar() {
    let ageSingularPlural;
    let metersSingularPlural;

    if (pessoa.age == 1) {
      ageSingularPlural = "ano";
    } else {
      ageSingularPlural = "anos";
    }

    if (pessoa.distance == 1) {
      metersSingularPlural = "metro";
    } else {
      metersSingularPlural = "metros";
    }

    let message = `Olá, eu sou ${pessoa.fullName}, tenho ${pessoa.age} ${ageSingularPlural}, minha altura é ${pessoa.height} e só hoje, eu já caminhei ${pessoa.distance} ${metersSingularPlural}!`;

    return message;
  },
};

cadastrar(pessoa);

console.log(pessoa.apresentacao());
