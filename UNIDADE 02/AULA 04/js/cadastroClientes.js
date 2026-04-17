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
const caixaNome = document.getElementById("nome");

//Função para retirar e validar os dados do formulário
const getDados = function() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    // Resetar o background dos campos
    nome.style.backgroundColor = "#fff";
    email.style.backgroundColor = "#fff";

    // Validação de Dados
    if(nome.value == '') {
        alert("O campo nome é obrigatório!");
        nome.style.backgroundColor = "#ed766d";
    } else if (email.value == '') {
        alert("O campo email é obrigatório!");
        email.style.backgroundColor = "#ed766d";
    };
}

// Função para impedir digitação de números no campo.
const blockNumber = function(tecla) {
    if(tecla.charCode >= 48 && tecla.charCode <=57) {
        return false
    }
}

//Função de evento para o clique do botão
botãoSalvar.addEventListener("click", getDados);
caixaNome.addEventListener("keypress", function(event){
    if(blockNumber(event) == false) {
        event.preventDefault();
    };
});