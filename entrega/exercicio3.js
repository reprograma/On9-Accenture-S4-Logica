var a = [1, 2, 3, 4, 5, 6]
var i = 0

function soma(a,i){
    tamanho = a.length - 1
    resultado = 0
    while (i<=tamanho){
        resultado = a[i] + resultado
        i = i + 1
        }
    return resultado
    }

console.log(soma(a, i))

