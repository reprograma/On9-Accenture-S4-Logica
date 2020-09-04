/*Exercício 5 - Crie um método para o objeto pessoa chamado apresentacao. 
Esse método deve retornar a string:
"Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

Se a idade for 1, a frase acima, na parte que fala da idade, vai mostrar a palavra "ano" ao invés de "anos", pois é singular;
Se a quantidade de metros caminhados for igual a 1, então a palavra que deve conter no retorno da frase acima é "metro" no lugar de "metros".
Para cada validação, você irá declarar uma variável localmente (dentro do método), que será concatenada com a frase de retorno, mostrando a resposta correta, de acordo com os dados inseridos no objeto.

*/

const readlineSync = require('readline-sync');

let pessoa = {
    nomeCompleto: readlineSync.question("Digite seu nome completo: "),
    idade: readlineSync.question("Digite sua idade: "),
    altura: readlineSync.question("Digite sua altura: "),
    metrosCaminhados: readlineSync.question("Digite a quantidade de metros caminhados no dia: "),
    apresentacao: function(){
        if(this.idade ==1 && this.metrosCaminhados==1){
            console.log(`Olá, eu sou ${this.nomeCompleto}, tenho ${this.idade} ano, minha altura é ${this.altura} e só hoje, eu já caminhei ${this.metrosCaminhados} metro!`)            
        } else if (this.idade ==1){
            console.log(`Olá, eu sou ${this.nomeCompleto}, tenho ${this.idade} ano, minha altura é ${this.altura} e só hoje, eu já caminhei ${this.metrosCaminhados} metros!`)

        }else if(this.metrosCaminhados ==1){
            console.log(`Olá, eu sou ${this.nomeCompleto}, tenho ${this.idade} anos, minha altura é ${this.altura} e só hoje, eu já caminhei ${this.metrosCaminhados} metro!`)
        }else{
            console.log(`Olá, eu sou ${this.nomeCompleto}, tenho ${this.idade} anos, minha altura é ${this.altura} e só hoje, eu já caminhei ${this.metrosCaminhados} metros!`)
        }
    },
}

console.log(pessoa.apresentacao());