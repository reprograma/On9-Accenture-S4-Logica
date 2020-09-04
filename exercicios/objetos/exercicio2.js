let contaCorrente = {
  saldo: 1000,
  taxaDeJuros: 1,
  depositar: function (qtde) {
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
  imprimirExtrato: function () {
    //return `Olar!\nSeu saldo atual é de R$${contaCorrente.saldo} e sua taxa de juros é de ${contaCorrente.taxaDeJuros}%.`;
    return (
      "Olar!\n Seu saldo atual é de R$" +
      this.saldo +
      " e sua taxa de juros é de" +
      this.taxaDeJuros +
      "%."
    );
  },
};

contaCorrente.depositar(100);
contaCorrente.sacar(600);

console.log(contaCorrente.imprimirExtrato());
