const readlineSync = require('readline-sync');

function cadastramento() {
	let apresentacao = {
		nomeCompleto: '',
		idade: 0,
		altura: 0,
		metrosCaminhados: 0,
	};

	apresentacao.nomeCompleto = readlineSync.question(
		'Digite o seu nome completo: '
	);
	apresentacao.idade = readlineSync.question('Digite a sua idade: ');
	apresentacao.altura = readlineSync.question(
		'Digite a sua altura em centímetros: '
	);
	apresentacao.metrosCaminhados = readlineSync.question(
		'Digite quantos metros caminhou: '
	);

	let nome = apresentacao.nomeCompleto;
	let idade = Number(apresentacao.idade);
	let altura = Number(apresentacao.altura);
	let distancia = Number(apresentacao.metrosCaminhados);

	if (idade <= 1 && distancia <= 1) {
		console.log(
			`Olá, eu sou ${nome}, tenho ${idade} ano, minha altura é ${altura}cm e só hoje, eu já caminhei ${distancia} metro!`
		);
	} else if (idade <= 1) {
		console.log(
			`Olá, eu sou ${nome}, tenho ${idade} ano, minha altura é ${altura}cm e só hoje, eu já caminhei ${distancia} metros!`
		);
	} else if (distancia <= 1) {
		console.log(
			`Olá, eu sou ${nome}, tenho ${idade} anos, minha altura é ${altura}cm e só hoje, eu já caminhei ${distancia} metro!`
		);
	} else {
		console.log(
			`Olá, eu sou ${nome}, tenho ${idade} anos, minha altura é ${altura}cm e só hoje, eu já caminhei ${distancia} metros!`
		);
	}
}

cadastramento();
