const readlineSync = require('readline-sync');

function cadastramento() {
	let cadastro = {
		nomeCompleto: '',
		idade: 0,
		altura: 0,
		metrosCaminhados: 0,
	};

	cadastro.nomeCompleto = readlineSync.question(
		'Digite o seu nome completo: '
	);
	cadastro.idade = readlineSync.question('Digite a sua idade: ');
	cadastro.altura = readlineSync.question(
		'Digite a sua altura em centímetros: '
	);
	cadastro.metrosCaminhados = readlineSync.question(
		'Digite quantos metros caminhou: '
	);

	let nome = cadastro.nomeCompleto;
	let idade = Number(cadastro.idade);
	let altura = Number(cadastro.altura / 100);
	let distancia = Number(cadastro.metrosCaminhados);

	console.log(nome);
	console.log(idade);
	console.log(altura);
	console.log(distancia);
}
cadastramento();
