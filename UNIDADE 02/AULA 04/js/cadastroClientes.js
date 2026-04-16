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

const getDados = function() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    console.log("Nome: " + nome);
    console.log("Email: " + email);
}

const botãoSalvar = document.getElementById("salvar");
botãoSalvar.addEventListener("click", getDados);