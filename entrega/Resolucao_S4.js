//Ex 1

console.log('Cores do arco-íris')
console.log('==================')
let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
console.log(rainbow)
//removendo blackberry e adicionando Yellow e Green
rainbow.splice(2,1,"Yellow","Green");
console.log(rainbow)
//adiocionando Purple
rainbow.splice(6,0,"Purple");
console.log(rainbow)

//Ex 2

let reverseMe = ["h", "e", "l", "l", "o"];
console.log(reverseMe);
reverseMe.reverse()
console.log(reverseMe);

//Ex 3

let number = [3, 15, 45, 60, 105, 165]
let adição = 0
for(index = 0; index < number.length; index ++){
    adição = adição + number[index]
}
console.log('O valor da soma é ' + (adição));

//Ex 4

let Cadastro_Pessoa = {
    NomeCompleto: "Mara Pereira", 
    Idade: 28,
    Altura: 169,
    MetrosPecorridosNoDia: 7000
}
console.log("Meu Nome é " + (Cadastro_Pessoa.NomeCompleto));
console.log("Eu tenho: " + (Cadastro_Pessoa.Idade));
console.log("Tenho " + (Cadastro_Pessoa.Altura) + " cm");
console.log("Hoje eu andei " + (Cadastro_Pessoa.MetrosPecorridosNoDia) + " metros")


//Ex 5

let Health = {
    Nome: "Mara " + "Pereira",
    Idade:28,
    Altura:169,
    MetrosPorDia:7000,

apresentacao: function(age, running){
    let ageSingularPlural = "";
    if(age==1){
        ageSingularPlural = " ano "
    }
    else{
       ageSingularPlural = " anos "
    }
    
    let runSingularPlural = "";
    if(running==1){
        runSingularPlural = " metro "
     
    }
    else{
        runSingularPlural = " metros "
    }
    return "Olá, eu sou a " + (Health.Nome) +  " tenho " + (Health.Idade) + (ageSingularPlural) +  
    " minha altura é " + (Health.Altura) + " cm " + " e só hoje eu ja caminhei "  +  (Health.MetrosPorDia)  +  (runSingularPlural)
}
}

console.log(Health.apresentacao())

   

     



