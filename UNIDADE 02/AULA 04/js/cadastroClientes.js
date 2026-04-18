/****************************************************
* Objetivo: Manipular dados de cadastro  e listagem de dados
* Data: 16/04/2026
* Autor: Jonathan Yuri Poli Siqueria
* Versão: 1.0
/*****************************************************/

/*
    var - Cria uma variavel/objeto (metodo mais antigo)

    let - Cria uma variável/objeto de nivel de escopo local no projeto

    const - Cria uma constante de nivel de escopo local ou global no projeto
*/

//Escopo Global
const botãoSalvar = document.getElementById("salvar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

var contadorRegistros = 1

//Função para retirar e validar os dados do formulário
const getDados = function() {
    let status = true;

    // Resetar o background dos campos
    nome.style.backgroundColor = "#fff";
    email.style.backgroundColor = "#fff";

    // Validação de Dados
    if(nome.value == '') {
        alert("O campo nome é obrigatório!");
        nome.style.backgroundColor = "#ed766d";
        status = false;
    } else if (email.value == '') {
        alert("O campo email é obrigatório!");
        email.style.backgroundColor = "#ed766d";
        status = false;
    };

    return status;
}

// Função para inserir novos dados na lista de clientes
const setDadosList = function(){
    if (contadorRegistros <= 4) {
        let colunaNome = document.getElementById("nome" + contadorRegistros);
        let colunaEmail = document.getElementById("email" + contadorRegistros);

        colunaNome.innerText = nome.value
        colunaEmail.innerText = email.value
        
        contadorRegistros += 1
    } else {
        alert("Não é possível inserir novos clientes!")
    }
}

// Função para impedir digitação de números no campo.
const blockNumber = function(tecla) {
    if(tecla.charCode >= 48 && tecla.charCode <=57) {
        return false
    }
}

//Função de evento para o clique do botão
botãoSalvar.addEventListener("click", function() {
    if (getDados()){
        setDadosList()
    }
});

nome.addEventListener("keypress", function(event){
    if(blockNumber(event) == false) {
        event.preventDefault();
    };
});