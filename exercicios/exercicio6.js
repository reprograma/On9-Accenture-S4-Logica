/*
1. Cadastro de sorvetes

Escreva um programa que faça o seguinte:

- pergunte para a usuária o sabor a ser cadastrado
- se a usuaria digitar 0, imprima a lista de sabores que ela cadastrou e saia do programa.

*/

const readlineSync = require("readline-sync");

let listaCadastro = []

let input1 = readlineSync.question("Digite um para começar")

while (input1 == 1){
    let input = readlineSync.question("Digite um sabor ou parte 0 para consluir")

    if( input != 0) {
        listaCadastro.push(input)
    }
    else{
        console.log(listaCadastro)
    }
}