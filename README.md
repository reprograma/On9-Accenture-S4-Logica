# On9-Accenture-S4-Logica

Lógica - Objetos, Arrays e Métodos

## Introdução

Até este momento do curso, trabalhamos com diversos tipos de dados, _Strings_, números, _booleans_... Mas como lidar com muitos dados de uma só vez?

Vamos imaginar que temos uma sorveteria e precisaremos gerenciar os mais diversos sabores que vamos vender na loja.

![Sorvetes](assets/gelatos.jpg)

```
Coco
Maracujá
Abacaxi
Baunilha
Tangerina
Doce de Leite
Iogurte de frutas vermelhas
Melancia
Chocolate
Chocolate Belga
Torta de limão
Sensação
Amendoim
Milho
... e contando...
```

Muitos sabores, não?

Será que existe um jeito de armazenar tudo em um lugar ou em uma variável, onde poderíamos ter tipo uma lista com todos os sorvetes?🤔

Rá, existe este jeito! Podemos armazenas estas informações todas em uma estrutura de dados chamada **Array**!

> **Array é uma estrutura de dados que pode carregar múltiplos valores de dados, de maneira organizada, como se fosse uma lista.**

### Como criar um Array?

Para declarar um array em Javascript, podemos fazer da seguinte maneira:

```javascript
let sorvetes = [];
```

os `[]` vazios significam que a variável `sorvete` é, neste momento um array vazio.

Vamos agora então colocar todos os sabores de sorvete da nossa loja dentro do array!

Note que nessa estrutura de dados, cada item é separado por virgulas.

```javascript
let sorvetes = [
  "Coco",
  "Maracujá",
  "Abacaxi",
  "Baunilha",
  "Tangerina",
  "Doce de Leite",
  "Iogurte de frutas vermelhas",
  "Melancia",
  "Chocolate",
  "Chocolate Belga",
  "Torta de limão",
];
```

Apesar de termos feito uma lista com os sabores, strings não são o único tipo de dado que você pode armazenar em uma array. Você também pode armazenar números, booleanos... e, na verdade, qualquer coisa!

```javascript
// cria o array `mixedData` com tipos de dados variados
var mixedData = ["abcd", 1, true, undefined, null, "todas as coisas"];
```

Você também pode mesmo armazenar uma array dentro de outra, criando uma array aninhada!
Arrays aninhadas podem ser particularmente difíceis de ler, então, é comum escrevê-las em uma linha, usando uma nova linha após cada vírgula:

```javascript
// cria uma array `arraysInArrays`, composta de três arrays
var arraysInArrays = [
  [1, 2, 3],
  ["Julia", "James"],
  [true, false, true, false],
];
```

### Acessando os elementos de uma array

O `index`, em um array é o endereço ou posição de um elemento.

Vamos voltar um pouco na aula anterior, quando falamos rapidamente sobre strings:

vamos criar uma variável nome e atribuir um valor a ela:

```javascript
let nome = "reprograma";
```

> Uma string também pode ser considerada como um array onde cada elemento é um caracter, certo?

| index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| item  | r   | e   | p   | r   | o   | g   | r   | a   | m   | a   |

Acessando a primeira letra da variável `nome`:

```javascript
console.log(nome[0]);
// imprime a letra 'r'
```

Isso significa que no nosso array de sorvetes podemos utilizar a mesma propriedade para acessar um sabor específico!

| index | item                        |
| ----- | --------------------------- |
| 0     | Coco                        |
| 1     | Maracujá                    |
| 2     | Abacaxi                     |
| 3     | Tangerina                   |
| 4     | Doce de Leite               |
| 5     | Iogurte de frutas vermelhas |
| 6     | Melancia                    |
| 7     | Chocolate                   |
| 8     | Chocolate Belga             |
| 9     | Torta de Limão              |

```javascript
console.log(sorvetes[8]);
// Chocolate Belga
```

> Lembre-se de que os elementos de uma array são indexados começando na posição 0. Para acessar um elemento em uma array, use o nome da array imediatamente seguido pelos colchetes contendo o índice do valor que você quer acessar.
>
> Se você tentar acessar um elemento em um índice que não existe, um valor de indefinido será retornado.

```javascript
console.log(sorvetes[10]);
// undefined
```

### Mudando o valor de um elemento do array

Se você quiser mudar um valor de um elemento em um array, você pode fazê-lo definindo ele como igual a um novo valor.

```javascript
sorvetes[1] = "Baunilha";
console.log(sorvetes[1]);
// imprime "Baunilha"
```

### Métodos e propriedades de Arrays

O JavaScript fornece um grande número de métodos para modificar arrays e acessar valores dentro dela. [Veja a documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), ou digite `[]`. no console do browser, para ver uma lista de todos os métodos para array disponíveis.

- [Length](#length)
- [Push](#push)
- [Pop](#pop)
- [Splice](#splice)

#### Length

Você pode descobrir o tamanho de uma array usando sua propriedade `length`.

```javascript
let sorvetes = ["Coco", "Abacaxi", "Baunilha"];
console.log(sorvetes.length());
// imprime 3
```

#### Push

Você pode usar o método push() para adicionar elementos ao fim de um array.

Por exemplo, imagine a seguinte distribuição de sorvetes:

```javascript
let sorvetes = ["Limão", "Doce de Leite", "Cookie"];
console.log(sorvetes.length());
// imprime 3
```

Então, você adicionar um novo sabor na última posição do array usando o método `push()`.

```javascript
sorvetes.push("Baunilha")''
//retorna 7
console.log(sorvetes)
// ["Limão", "Doce de Leite", "Cookie", "Baunilha"];
```

Observe que, com o método `push()`, você precisa passar o valor do elemento que quer adicionar ao fim da array. O método `push()` também retorna o tamanho da array após um elemento ser adicionado.

#### Pop

Você pode usar o método `pop()` para remover elementos do fim de uma array.

```javascript
let sorvetes = ["Limão", "Doce de Leite", "Cookie", "Baunilha"];

sorvetes.pop(); //retira "Baunilha" da última posição do array sorvetes
sorvetes.pop(); //retira "Cookie" da última posição do array sorvetes
sorvetes.pop(); //retira "Doce de Leite" da última posição do array sorvetes

// Retorna "Doce de Leite"
```

Com o método `pop()` você não precisa passar um valor; em vez disso, `pop()` sempre removerá o último elemento do fim de uma array. `pop()` também retorna o elemento que foi removido, no caso de você precisar usá-lo.

#### Splice

`splice()` é um outro método acessível que permite que você adicione e remova elementos de qualquer lugar dentro de uma array.

Enquanto `push()` e `pop()` limitam-se a adicionar e remover elementos do fim de um array, `splice()` permite especificar a localização do índice para adicionar novos elementos, bem como o número de elementos que você gostaria de excluir (se existir algum).

```javascript
let sorvetes = ["Morango", "Abacaxi", "Maracujá"];
sorvetes.splice(1, 1, "Abacaxi com coco", "Manga");

// Retorna Abacaxi

console.log(sorvetes);
// [ 'Morango', 'Abacaxi com coco', 'Manga', 'Maracujá' ]
```

Estado inicial do array:

| Morango | Abacaxi | Maracuja |
| ------- | ------- | -------- |


Estado final após o `splice()`

| Morango | Abacaxi com coco | Manga | Maracuja |
| ------- | ---------------- | ----- | -------- |


O primeiro argumento representa o **índice inicial** de onde você quer alterar a array, o segundo argumento representa o **número de elementos** que você quer remover e o restante dos argumentos representam os elementos que você quer adicionar.

#### Exercícios

Tempo da atividade: `20min`

1. Crie um array e adicione pelo menos 5 elementos nele. Depois, imprima o array criado usando `console.log()`
2. Crie um array de preços com as seguintes informações:

- 1.23,
- 48.11,
- 90.11,
- 8.50,
- 9.99,
- 1.00,
- 1.10,
- 67.00

Altere o preço do 1°, 3°, 7° elemento.

3. Decidimos renovar o sabor de alguns sorvetes.

```javascript
let sorvetes = [
  "Coco",
  "Maracujá",
  "Abacaxi",
  "Baunilha",
  "Tangerina",
  "Doce de Leite",
  "Iogurte de frutas vermelhas",
  "Melancia",
  "Chocolate",
  "Chocolate Belga",
  "Torta de limão",
];
```

Precisamos que você retire do cardápio o sabor `Iogurte de frutas vermelhas` e acrescente os sabores `Paçoquita` e `Passas ao rum`.

4. (Utilize o array acima para fazer este exercício)

Faremos um evento corporativo e por isso reduziremos nosso cardápio, levando apenas os 3 primeiros sabores da nossa lista. Remova todos os outros sabores.

5. Top 5 dos melhores sabores
   Considere o seguinte array:

```javascript
let sabores = ["Limão", "Milho", "Napolitano", "Maracujá"];
```

Escreva uma funcão chamada `topissimos()` que recebe um array como parâmetro.

Retorne `true` ou `false` dependendo de o array ter pelo menos 5 sabores.

> dica: Modifique o array para validar se sua função está retornando o valor correto.

Imprima no console o resultado.

---

### Loops & Arrays

Uma vez que o dado está na array, você quer ser capaz de eficientemente acessar e manipular cada elemento da array sem escrever código repetitivo para cada elemento.

Por exemplo, se esta fosse nossa array sorvetes original:

```javascript
let sorvetes = ["Chocolate", "Creme", "Iogurte"];
```

Se decidíssemos alterar todo os sabores para vendê-los como _orgânicos_, poderiamos escrever o seguinte código:

```javascript
sorvetes[0] += " orgânico";
sorvetes[1] += " orgânico";
sorvetes[2] += " orgânico";

console.log(sorvetes)[
  ("Chocolate orgânico", "Creme orgânico", "Iogurte orgânico")
];
```

Mas... e se tivéssemos uma lista com 50 sabores? Faríamos todo esse trabalho manual???
Qual técnica podemos usar para automatizar tarefas para nós?

```javascript
let sorvetes = ["Chocolate", "Creme", "Iogurte"];

for (let index = 0; index < sorvetes.length; index++) {
  sorvetes[index] += " orgânico";
}

console.log(sorvetes)[
  ("Chocolate orgânico", "Creme orgânico", "Iogurte orgânico")
];
```

Neste exemplo, a variável `index` está sendo usada para representar o índice do array.

À medida que `index` é incrementado, você passa em cada elemento da array, começando de 0 até chegar a sorvetes.length - 1 (sorvete.length está fora do limite).

#### Exercícios

1. Cadastro de sorvetes

Escreva um programa que faça o seguinte:

- pergunte para a usuária o sabor a ser cadastrado
- se a usuaria digitar 0, imprima a lista de sabores que ela cadastrou e saia do programa.

2. Escreva uma função que recebe 2 parametros: array e número.
   Você deverá usar um laço de repetição para remover do array a quantidade exata passada como parametro da função.

Por fim, imprima no console o array modificado pela sua função
Exemplo:

```javascript
let sorvetes = ["Chocolate", "Creme", "Iogurte"];

removeSabor(array, 2);

console.log(sorvetes);
// retorna ["Chocolate]
```

### Conteúdo Extra Aula: Outros métodos de arrays:

- [`foreach`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`map`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`filter`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)
- [`reduce`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [`spread`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [`rest`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)
