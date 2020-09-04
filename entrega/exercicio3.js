/**Exercício 3 - Crie uma função que retorna a soma dos elementos de um array. Exemplo:
    //soma = 1 + 2 + 3 + 4 + 5 = 15
 * 
 */
//.reduce()
/*Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento.
A função que executamos recebe como primeiro parâmetro uma variável que irá acumular um valor 
e como segundo parâmetro teremos cada um dos elementos do Array a cada iteração.
*/

let soma =  [1, 2, 3, 4, 5]
const total = soma.reduce((total, currentElement) => total + currentElement)
console.log(total)

