let sabores = ["Limão", "Milho", "Napolitano", "Maracujá", "Flocos"];

function topissimos(listaDeSabores) {
  if (listaDeSabores.length < 5) {
    return false;
  } else {
    return true;
  }
}
console.log(topissimos(sabores));
