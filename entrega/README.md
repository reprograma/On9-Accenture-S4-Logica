1. James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:

```javascript
let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
```

mas James tinha isto:
`let rainbow = ["Red", "Orange", "Blackberry", "Blue"];`

Usando somente o método `splice()`, insira as cores que faltam na array e remova a cor "Blackberry", seguindo estes passos:

Remova "Blackberry"
Adicione "Yellow" e "Green"
Adicione "Purple"

---

2. Função disco da Xuxa, o retorno.

Use a [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) para determinar quais destes métodos seria o melhor para reverter elementos nesta array:

```javascript
reverseMe = ["h", "e", "l", "l", "o"];
```

3. Crie uma função que retorna a soma dos elementos de um array.
   Exemplo:

```let array = [1,2,3,4,5]
    //soma = 1 + 2 + 3 + 4 + 5 = 15
```

4. Crie um programa que faça o cadastro de uma pessoa.
   O programa deve receber os seguintes dados:

- nome completo;
- idade;
- altura;
- metros caminhados no dia

5. Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
   retornar a string:

> "Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
  palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
  deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
  método), que será concatenada com a frase de retorno, mostrando a resposta
  correta, de acordo com os dados inseridos no objeto.
