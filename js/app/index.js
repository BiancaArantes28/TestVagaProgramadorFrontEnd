var cliente = new Cliente();
var erro = 0;

var campos = [
	document.querySelector("#nome"),
	document.querySelector("#email"),
	document.querySelector("#cpf"),
	document.querySelector("#cor-do-carro"),
	document.querySelector("#acessorio"),
	document.querySelector("#tamanho-roda"),
	document.querySelector("#tamanho-pneu"),
	document.querySelector("#observacoes"),
]

var campos_results = [
	document.querySelector("#result-nome"),
	document.querySelector("#result-email"),
	document.querySelector("#result-cpf"),
	document.querySelector("#result-cor"),
	document.querySelector("#result-acessorio"),
	document.querySelector("#result-tamanho-roda"),
	document.querySelector("#result-tamanho-pneu"),
	document.querySelector("#result-observacoes"),
]

document.querySelector('#formulario_teste').addEventListener('submit', function(event){
	event.preventDefault();
	
	for(var i = 0; i < campos.length; i++){
		if(campos[i].required){
			if(campos[i].length === 0){
				campos_results[i].style.color = 'red';
				campos_results[i].textContent = "Por favor, preencha este campo!";
				erro += 1;
			}
		}
	}
	if(erro === 0){
		console.log(checkName(campos[0].value));
		checkEmail(campos[1].value);
		checkCpf(campos[2].value);
		checkCorDoCarro(campos[3].value);
		checkTamanhoRoda(campos[5].value);
		checkTamanhoPneu(campos[6].value);
		checkObservacoes(campos[7].value);
	}
});

function checkName(nome){
	campos_results[0].textContent = "";
	if(cliente.verificaNome(nome)){
		campos_results[0].style.color = 'green';
		campos_results[0].textContent = "Nome válido";
		var nomeObject = new Object();
		nomeObject.nome = campos[0].value;
		return nomeObject;
	}else{
		campos_results[0].style.color = 'red';
		campos_results[0].textContent = "Nome inválido";
	}
}

function checkEmail(email){
	campos_results[1].textContent = "";
	if(cliente.verificaEmail(email)){
		campos_results[1].style.color = 'green';
		campos_results[1].textContent = "Email válido";
		var emailObject = new Object();
		emailObject.email = campos[1].value;
		return emailObject;
	}else{
		campos_results[1].style.color = 'red';
		campos_results[1].textContent = "Email inválido";
	}
}

function checkCpf(cpf){
	campos_results[2].textContent = "";
		if(cliente.verificaCpf(cpf)){
			cliente.mascaraCpf(cpf);
			campos[2].value = cliente.cpf;

			campos_results[2].style.color = 'green';
			campos_results[2].textContent = "CPF válido";
			var cpfObject = new Object();
			cpfObject.cpf = campos[2].value;
		}else{
			campos_results[2].style.color = 'red';
			campos_results[2].textContent = "CPF inválido";
		}
}

function checkCorDoCarro(value){
	if(value.length === 0){
		campos_results[3].style.color = 'red';
		campos_results[3].textContent = "Por favor, selecione alguma opção";
	}else{
		corObject = new Object();
		corObject.cor_do_carro = campos[3].value;
		return corObject;
	}
}

function checkTamanhoRoda(value){
	if(value.length === 0){
		campos_results[5].style.color = 'red';
		campos_results[5].textContent = "Por favor, selecione alguma opção";
	}else{
		tamanhoRodaObject = new Object();
		tamanhoRodaObject.tamanho_roda = campos[5].value;
		return tamanhoRodaObject;
	}
}

function checkTamanhoPneu(value){
	if(value.length === 0){
		campos_results[6].style.color = 'red';
		campos_results[6].textContent = "Por favor, selecione alguma opção";
	}else{
		tamanhoPneuObject = new Object();
		tamanhoPneuObject.tamanho_pneu = campos[6].value;
		return tamanhoPneuObject;
	}
}

function checkObservacoes(value){
	if(value.length > 600){
		campos_results[7].style.color = 'red';
		campos_results[7].textContent = "Número máximo de caracteres excedidos";
	}else{
		observacoesObject = new Object();
		observacoesObject.observacoes = campos[7].value;
		return observacoesObject;
	}
}

