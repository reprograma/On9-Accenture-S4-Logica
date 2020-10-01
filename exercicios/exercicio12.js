/*
4. Crie um objeto chamado `facebookProfile`. O objeto deve ter três propriedades:

- seu nome (`name`)
- o número de amigos (`friends`) que você tem e
- um array de mensagens (`messages`) que você postou (como strings)

O objeto deve também possuir quatro métodos:

- postMessage(`message`) - adiciona uma nova mensagem em formato de string na array
- deleteMessage(`index`) - remove a mensagem correspondente ao índice fornecido
- addFriend() - aumenta a contagem de amigos em 1
- removeFriend() - diminui a contagem de amigos em 1

*/

  let facebookProfile = {
    name: "Maria",
    friends: 2000,
    menssages: ["oi","td bem?",],
  
    postMessage: function(menssage) {
       facebookProfile.menssages.push(menssage);
        return(facebookProfile.menssages)
    },


    addFriend: function (){
        facebookProfile.friends ++
        return(facebookProfile.friends)
    },



    removeFriend: function(){
        facebookProfile.friends --
        return(facebookProfile.friends)
    },
    deleteMessage: function(menssag) {
        facebookProfile.menssages.pop(menssag);
         return(facebookProfile.menssages)
}, 
  }
console.log(facebookProfile.deleteMessage())
console.log(facebookProfile)

 
    //deleteMessage: function(posicao, quantidade) {
   //     facebookProfile.menssagens.splice(posicao, quantidade);
    //    return(facebookProfile.menssagens)
        
  //  },

//console.log(facebookProfile.postMessage("ola"))
//console.log(facebookProfile.deleteMessage(3,1))

