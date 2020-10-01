let person = {
    name: "Maria",
    age: 25,
    parents: ["Pedro", "Joana"],
    siblings: ["Marta"],
    favoriteColor: "red",
    pets: true,
    cabelo: function(){
        console.log("preto")
    }
  };

  console.log(person)

  console.log(person.name)

  console.log(person.name,person.pets)
  
  //Chamnado a function
  console.log(person.cabelo())