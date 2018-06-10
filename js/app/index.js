var cliente = new Cliente();
var cpfResult = document.getElementById("result-cpf");
var nomeResult = document.getElementById("result-nome");
var cpfCampo = document.querySelector("#cpf");

function checkName(nome){
	if(cliente.verificaNome(nome)){
		nomeResult.style.color = 'green';
		nomeResult.textContent = "Nome válido";
	}else{
		nomeResult.style.color = 'green';
		nomeResult.textContent = "Nome inválido";
	}
}

function validateCpf(cpf){
		if(cliente.verificaCpf(cpf)){
			cliente.mascaraCpf(cpf);
			cpfCampo.value = cliente.cpf;
		}else{
			cpfResult.style.color = 'red';
			cpfResult.textContent = "CPF inválido";
		}
}

function checkCpf(cpf){
	if(cpfCampo.value.length === 0){
		cpfResult.textContent = "";
	}else{
		if(cliente.verificaCpf(cpf)){
			cliente.mascaraCpf(cpf);
			cpfCampo.value = cliente.cpf;
			cpfResult.style.color = 'green';
			cpfResult.textContent = "CPF válido";
		}else{
			cpfResult.style.color = 'red';
			cpfResult.textContent = "CPF inválido";
		}
	}
}

