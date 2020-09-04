var facebookProfile = {
  name: "Joselia",
  friends: 3,
  messages: ["a verdade está la fora", "saia do facebook", "mensagem"],
  postMessage: function (message) {
    if (message !== "") {
      facebookProfile.messages.push(message);
    }
  },
  deleteMessage: function (index) {
    if (index !== -1) {
      facebookProfile.messages.splice(index, 1);
    }
  },
  addFriend: function () {
    facebookProfile.friends++;
  },
  removeFriend: function () {
    facebookProfile.friends--;
    facebookProfile.friends = facebookProfile.friends - 1;
  },
};
