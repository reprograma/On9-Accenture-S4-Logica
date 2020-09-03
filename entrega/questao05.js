/* Crie um método para o objeto pessoa chamado apresentacao. Esse método deve retornar a string:
"Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, 
eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

Se a idade for 1, a frase acima, na parte que fala da idade, vai mostrar a palavra "ano" ao invés de "anos", pois é singular;
Se a quantidade de metros caminhados for igual a 1, então a palavra que deve conter no retorno da frase acima é "metro" no lugar de "metros".
Para cada validação, você irá declarar uma variável localmente (dentro do método), que será concatenada com a frase de retorno, mostrando a resposta correta, de acordo com os dados inseridos no objeto. */


const readlineSync = require("readline-sync");

let pessoa = {
    nomeCompleto: "",
    idade: 0,
    altura: 0,
    metroPorDia: 0
};

pessoa.nomeCompleto = readlineSync.question("Nome: ")
pessoa.idade = readlineSync.question("Idade: ")
pessoa.altura = readlineSync.question("Altura: ")
pessoa.metroPorDia = readlineSync.question("Metro por dia:")

function imprimir (){
metro = "metros"
ano = "anos"

if (pessoa.metroPorDia == 1 ){
    metro = "metro"
}else if (pessoa.idade == 1){
    ano = "ano"
}

console.log(`Olá, eu sou" ${pessoa.nomeCompleto}, tenho ${pessoa.idade} ${ano}, minha altura é ${pessoa.altura} e só hoje, 
eu já caminhei ${pessoa.metroPorDia} ${metro}!`)
};

imprimir()
