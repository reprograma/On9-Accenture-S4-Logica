/* Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
   retornar a string:

> "Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
  palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
  deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
  método), que será concatenada com a frase de retorno, mostrando a resposta
  correta, de acordo com os dados inseridos no objeto. */

let pessoa = {
    nomeCompleto: "Clarice Santos da Silva",
    idade: 24,
    altura: 1.80,
    metrosCaminhadosNoDia: 500,

    apresentacao: function() {
        let formatIdade;
        let formatMetro;
        if (pessoa.idade === 1) {
            formatIdade = "ano";
        } else {
            formatIdade = "anos";
        }

        if (pessoa.metrosCaminhadosNoDia === 1) {
            formatMetro = "metro";
        } else {
            formatMetro = "metros";
        }

        return `Olá, eu sou ${pessoa.nomeCompleto} tenho ${pessoa.idade} ${formatIdade}, minha altura é ${(pessoa.altura).toFixed(2)} e só hoje, eu já caminhei ${pessoa.metrosCaminhadosNoDia} ${formatMetro}!`
    }
}

console.log(pessoa.apresentacao())

// node entrega/exercicio05.js