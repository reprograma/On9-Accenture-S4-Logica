/*
2. Conta no banco

```javascript
let 2. Conta no banco

```javascript
let contaCorrente = {
  saldo: 1000,
  taxaDeJuros: 1,
  depositar: function adicionarDinheiros(qtde) {
    if (qtde > 0) {
      contaCorrente.saldo += qtde;
    }
  },
  sacar: function retirarDinheiro(qtde) {
    var saldoDisponivel = contaCorrente.saldo - qtde;
    if (qtde > 0 && saldoDisponivel >= 0) {
      contaCorrente.saldo -= qtde;
    }
  },
};
```

adicione um método `imprimirExtrato()` que retorne a seguinte mensagem de conta:

```
Olar!
Seu saldo atual é de R$1000 e sua taxa de juros é de 1%.
```

adicione um método `imprimirExtrato()` que retorne a seguinte mensagem de conta:

```
Olar!
Seu saldo atual é de R$1000 e sua taxa de juros é de 1%.

*/
let  contaCorrente = {
  saldo: 1000,
  taxaDeJuros: 1,
  depositar: function adicionarDinheiros(qtde) {
    if (qtde > 0) {
      contaCorrente.saldo += qtde;
    }
  },
  sacar: function retirarDinheiro(qtde) {
    var saldoDisponivel = contaCorrente.saldo - qtde;
    if (qtde > 0 && saldoDisponivel >= 0) {
      contaCorrente.saldo -= qtde;
    }
  },
  imprimirExtrato: function(){
      console.log("Olar! Seu saldo atual é de " + contaCorrente.saldo + "e sua taxa de juros é de " + contaCorrente.taxaDeJuros +"%.")
  }
}; 
console.log(contaCorrente.imprimirExtrato())
