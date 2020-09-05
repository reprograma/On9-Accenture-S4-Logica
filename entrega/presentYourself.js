let pessoa = {
    name: "Denise Evelin",
    age: 27,
    height: 1.54,
    walkingDistance: 1000,
    presentYourself: function (age, walkingDistance) {
        age = this.age;
        walkingDistance = this.walkingDistance;
        if (age === 1) {
            age += " ano";
        } else age += " anos";
        
        if (walkingDistance === 1) {
            walkingDistance += " metro!";
        } else walkingDistance += " metros!";

        return "Olá, eu sou " + pessoa.name + ", tenho " + age + ", minha altura é " + pessoa.height + " e só hoje, eu já caminhei " + walkingDistance;        
    }
}

console.log(pessoa.presentYourself());