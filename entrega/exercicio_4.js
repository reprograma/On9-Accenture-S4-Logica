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
	console.log(cadastro.nomeCompleto);

	cadastro.idade = readlineSync.question('Digite a sua idade: ');
	console.log(cadastro.idade);

	cadastro.altura = readlineSync.question(
		'Digite a sua altura em centímetros: '
	);
	console.log(cadastro.altura);

	cadastro.metrosCaminhados = readlineSync.question(
		'Digite quantos metros caminhou: '
	);
	console.log(cadastro.metrosCaminhados);
}
cadastramento();
