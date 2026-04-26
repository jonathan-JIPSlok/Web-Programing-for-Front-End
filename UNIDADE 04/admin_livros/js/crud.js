/****************************************************************************************************************
 * Objetivo: Realizar o CRUD de dados referente aos livros
 * Data: 24/04/2026
 * Autor: Jonathan Yuri Poli Siqueira
 * Versão: 1.0
 * API: https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros
 *****************************************************************************************************************/


const botaoSalvar = document.getElementById('salvar');


//Inserir um novo livro
const postLivro = async function() {

    let URL = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livro';

    let dadosJSON = {};

    //Receber os dados do formulário
    let nomeLivro       = document.getElementById('title');
    let descricaoLivro  = document.getElementById('subtitle');
    let fotoLivro       = document.getElementById('image');
    let valorLivro      = document.getElementById('price');

    //Validação



    //Crira o JSON de dados
    dadosJSON.title     = nomeLivro.value;
    dadosJSON.subtitle  = descricaoLivro.value;
    dadosJSON.image     = fotoLivro.value;
    dadosJSON.price     = valorLivro.value;

    console.log(dadosJSON);
    //POST dos dados para a API de Livros
    let response = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dadosJSON)
    })

    if(response.status == 201) {
        alert('Livro cadastrado com sucesso!');
    }else{
        alert('Não foi possível cadastrar o livro. Houve problemas na requisição.');
    }

}


//Atualizar um livro existente
const putLivro = async function() {

}


//excluir um livro existente
const deleteLivro = async function() {

}


//buscar todos os livros cadastrados
const getAllLivros = async function() {

}


//buscar um livro pelo id
const getByIdLivro = async function() {

}


botaoSalvar.addEventListener('click', function() {
    postLivro();
});