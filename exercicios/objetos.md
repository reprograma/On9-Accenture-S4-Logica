1. Crie um objeto `breakfast` para representar o seguinte item do menu:

```
Feijoada - R$12,99
arroz, feijão, couve refogada, linguiça, farofa
```

O objeto deve conter propriedades para `name`, `price` e `ingredients`.

2. Conta no banco

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

3. Usando o objeto do quiz anterior, responda à seguinte pergunta:

Quais da seguintes são maneiras válidas para acessar propriedades e chamar métodos de um objeto chamado contaCorrente?

4. Crie um objeto chamado `facebookProfile`. O objeto deve ter três propriedades:

- seu nome (`name`)
- o número de amigos (`friends`) que você tem e
- um array de mensagens (`messages`) que você postou (como strings)

O objeto deve também possuir quatro métodos:

- postMessage(`message`) - adiciona uma nova mensagem em formato de string na array
- deleteMessage(`index`) - remove a mensagem correspondente ao índice fornecido
- addFriend() - aumenta a contagem de amigos em 1
- removeFriend() - diminui a contagem de amigos em 1
