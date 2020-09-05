
//Use a função Array.prototype.reduce() "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
function someOsNumeroDaArray(){
    const somandoNumeroArray = [1, 2, 3, 4, 5];    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(somandoNumeroArray.reduce(reducer));

}
someOsNumeroDaArray();