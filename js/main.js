let erro = true;

const nome = document.querySelector("#nome");
MaskJS(nome).mascararPalavra();

const validarNome = function(){
	if(nome.value.length < 10 || nome.value.length == 0){
		erro = true;
		erroNome.innerText = "Preenha o campo com no mínimo 10 Digítos!"		
	}else{
		erroNome.innerText = "";
		erro = false;
	}
}
//Permitindo Letras e Numeros no endereço
const endereco = document.querySelector("#endereco");
 MaskJS(endereco).mascararAlfaNumero();

 const validarEndereco = function(){
	 if(endereco.value.length == 0){
		 erro = true;
		 erroEndereco.innerText = "Preencha o campo selecionado!!";
	 }else{
		 erroEndereco.innerText = "";
		 erro = false;
	 }
 }
 
//Permitindo apenas letras para Cidade
const cidade = document.querySelector("#cidade");
MaskJS(cidade).mascararPalavra();

const validarCidade = function(){
	if(cidade.value.length ==0){
		erro = true;
		erroCidade.innerText = "Preencha o campo Selecionado!!";
	}else{
		erroCidade.innerText = "";
		erro = false;
	}
}

//Permitindo apenas Letras para Estado
const estado = document.querySelector("#estado");
MaskJS(estado).mascararPadrao("AA");

const validarEstado = function(){
	if(estado.value.length == 0){
		erro = true;
		erroEstado.innerText = "Preencha o campo selecionado com duas Letras!";
	}else{
		erroEstado.innerText = "";
		erro = false;
	}
}

//Permitindo Apenas numeros para telefone
const telefone = document.querySelector("#telefone");
MaskJS(telefone).mascararPadrao("(99)99999-9999");

const validarTel = function(){
	if(telefone.value.length<14 || telefone.value.length == 0){
		erro = true;
		erroTel.innerText = "Preencha o campo com 11 dígitos!!";
	}else{
		erroTel.innerText = "";
		erro = false;
	}
}

//Permitindo apenas numero para Celular
const celular = document.querySelector("#celular");
MaskJS(celular).mascararPadrao("(99)99999-9999");

const validarCel = function(){
	if(celular.value.length<14 || celular.value.length == 0){
		erro = true;
		erroCel.innerText = "Preencha o campo com 11 dígitos!!";
	}else{
		erroCel.innerText = "";
		erro = false;
	}
}

//Permitindo apenas letras para a profissao
const profissao = document.querySelector("#profissao");
MaskJS(profissao).mascararPalavra();

const validarProfi = function(){
	if(profissao.value.length == 0){
		erro = true;
		erroProfissao.innerText = "Preencha o campo selecionado!";
	}else{
		erroProfissao.innerText = "";
		erro = false;
	}
}
//Permitindo apenas numero RG
const rg = document.querySelector("#identidade");
MaskJS(rg).mascararNumero();

const validarRg = function(){
	if(rg.value.length <6 || rg.value.length ==0){
		erro = true;
		erroRg.innerText = "Preencha o campo com no mínimo 6 dígitos!!"
	}else{
		erroRg.innerText = "";
		erro = false;
	}
}

//Padrao para carteira CNH
const cnh = document.querySelector("#cnh");
MaskJS(cnh).mascararPadrao("999999999");

const validarCnh = function(){
	if(cnh.value.length == 0){
		erro = true;
		erroCnh.innerText = "Preencha o campo selecionado!!";
	}else{
		erroCnh.innerText = "";
		erro = false;
	}
}

//Título
const titulo = document.querySelector("#titulo");
MaskJS(titulo).mascararPadrao("9999 9999 9999");

const validarTitulo = function(){
	if(titulo.value.length < 12 || titulo.value.length == 0){
		erro = true;
		erroTitulo.innerText = "Preencha o campo com 12 Dígitos!!";
	}else{
		erroTitulo.innerText = "";
		erro = false;
	}
}
//passaporte
const passaporte = document.querySelector("#passaporte");
MaskJS(passaporte).mascararPadrao("AA999999");

const validarPassa = function(){
	if(passaporte.value.length == 0){
		erro = true;
		erroPassa.innerText ="Preencha o campo selecionado!!";
	}else{
		erroPassa.innerText = "";
		erro = false;
	}
}

//CPF
const cpf = document.querySelector("#cpf");
MaskJS(cpf).mascararPadrao("999.999.999-99");

const validarCpf = function(){
	if(cpf.value.length == 14){
		erroCpf.innerText = "";
		erro = false;
	}else{
		erro = true;
		erroCpf.innerText = "Preencha o campo com 11 Dígitos!!";
	}
}

const validarEmail = e =>{
	let val = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;

	if(val.test(e)){
		erroEmail.innerText = "";
		erro = false;
	}else{
		erro = true;
		erroEmail.innerText = "EMAIL INVÁLIDO!"
	}
	//return val.test(e);
}

const passa = document.querySelector("#passa");
const clas = document.querySelector("#clasdiv");

const validarPassaporte = function(valor){
	if(valor == "nao"){
		clas.style.display = "none";
	}else{
		clas.style.display = "block";
	}
}

const botao = document.querySelector("#enviar");

form.onsubmit = function(e){
	if(erro == true){
		e.preventDefault();
		erroBotao.innerText = "Preencha todo formulário!";
	}
}

const select = document.querySelector("#select");
//const erroSelect = document.querySelector("#erroSelect")

const validarSelect = function(){
	if(select.value == "Trabalho" || select.value == "Turismo" || select.value == "Estudo" || select.value == "Sair do País"){
		erroSelect.innerText = "";
		erro = false;
	}else{
		erro = true;
		erroSelect.innerText = "Motivo inválido!";
	}

const validacao = function(){
	if(nome.value == 0){
		erro = true;
		erroNome.innerText = "Preencha este campo!";
	}
	if(endereco.value == 0){
		erro = true;
		erroEndereco.innerText = "Preencha este campo!";
	}
	if(cidade.value == 0){
		erro = true;
		erroCidade.innerText = "Preencha este campo!";
	}
	if(nome.value == 0){
		erro = true;
		erroNome.innerText = "Preencha este campo!";
	}
	if(estado.value == 0){
		erro = true;
		erroEstado.innerText = "Preencha este campo!";
	}
	if(telefone.value == 0){
		erro = true;
		erroTel.innerText = "Preencha este campo!!";
	}
	if(email.value == 0){
		erro = true;
		erroEmail.innerText = "Preencha este campo!";
	}
	if(profissao.value == 0){
		erro = true;
		erroProfissao.innerText = "Preencha este campo!";
	}
	if(celular.value == 0){
		erro = true;
		erroCel.innerText = "Preencha este campo!";
	}
	if(rg.value == 0){
		erro = true;
		erroRg.innerText = "Preencha este campo!";
	}
	if(cnh.value == 0){
		erro = true;
		erroCnh.innerText = "Preencha este campo!";
	}
	if(cpf.value == 0){
		erro = true;
		erroCpf.innerText = "Preencha este campo!";
	}
	if(titulo.value == 0){
		erro = true;
		erroTitulo.innerText = "Preencha este campo!";
	}
	if(passaporte.value == 0){
		erro = true;
		erroPassa.innerText = "Preencha este campo!";
	}
	if(select.value == "Trabalho" || select.value == "Turismo" || select.value == "Estudo" || select.value == "Sair do País"){

	}else{
		erro = true;
		erroSelect.innerText = "Motivo inválido!";
	}

}


