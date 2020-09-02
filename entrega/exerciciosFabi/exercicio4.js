/* 4. Crie um programa que faça o cadastro de uma pessoa.
   O programa deve receber os seguintes dados:

- nome completo;
- idade;
- altura;
- metros caminhados no dia */

const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite seu nome completo: "); 

const idade = readlineSync.question("Digite a sua idade: ")

const altura = readlineSync.question("Digite a sua altura: ")

const metro = readlineSync.question("Digite qto metros vc caminha por dia: ")

let dados = [];
dados.push(nome);
dados.push(idade);
dados.push(altura);
dados.push(metro);

console.log("Dados Cadastrados:  "+dados)




/* function fibonacci( numeroDoUsuario ) {
    console.log("Qual o valor inserido pelo usuário? " + numeroDoUsuario)
    let primeiroNumero = 0
    let segundoNumero = 1
    for (let index = 2; index <= numeroDoUsuario; index++) {
        let ultimoNumero = primeiroNumero; // nessa linha, o ultimoNumero acabou de ser criado, então ele recebe o valor do primeiroNumero, passando a ser 0 no primeiro loop
        console.log("Acabamos de criar a variavel ultimoNumero, na iteração " + index + " no momento ela vale: " + ultimoNumero)
        primeiroNumero = segundoNumero;  // nessa linha, o primeiroNumero tem seu valor trocado para o mesmo do segundoNumero, então ele passa a ser 1 no primeiro loop
        console.log("Nesse momento a variável segundoNumero vale: " + segundoNumero)
        segundoNumero += ultimoNumero; // aqui, é feita a soma para gerar o resultado do número de fibonacci, somando os dois últimos valores passados
    }
    return "O numero " + numeroDoUsuario + " da sequência de fibonacci é: " + segundoNumero;
  }
  console.log(fibonacci(4)) */