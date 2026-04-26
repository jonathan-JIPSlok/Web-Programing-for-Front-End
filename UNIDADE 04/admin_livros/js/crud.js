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
        resetForm();
        getAllLivros();
        
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
    let URL = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros';

    let response = await fetch(URL)

    let dados = await response.json();

    //Recebe o elemento principal para colocar a lista de dados
    let divListDados = document.getElementById('listDados');

    divListDados.innerText = ''; //Limpa os dados para evitar duplicidade


    dados.book.forEach(function(itemLivro){
        let nomeLivro = itemLivro.title;
        let descLivro = itemLivro.subtitle;
        let valorLivro = itemLivro.price;
        let idLivro = itemLivro.id;
        

        let nomeLivros = 'Nome'
        let descLivros = 'Descrição'
        let valorLivros = '10'

        
        //Criar elementos no HTML
        let divDados = document.createElement('div');
        let divTitle = document.createElement('div');
        let divSubtitle = document.createElement('div');
        let divPrice = document.createElement('div');
        let divOpcoes = document.createElement('div');
        let spanEditar = document.createElement('span');
        let spanExcluir = document.createElement('span');
        let imgEditar = document.createElement('img');
        let imgExcluir = document.createElement('img');

        //Adicionar atributos
        divDados.setAttribute('class', 'linha dados');
        imgEditar.setAttribute('src', "icones/ditar.png");
        imgExcluir.setAttribute('src', "icones/excluir.png");

        //Textos
        divTitle.innerText = nomeLivros;
        divSubtitle.innerText = descLivros;
        divPrice.innerText = valorLivros;

        //Associar os elementos criados com o elemento principal
        divListDados.appendChild(divDados);
        divDados.appendChild(divTitle);
        divDados.appendChild(divSubtitle);
        divDados.appendChild(divPrice);
        divDados.appendChild(divOpcoes);
        divOpcoes.appendChild(spanEditar);
        divOpcoes.appendChild(spanExcluir);
        spanEditar.appendChild(imgEditar);
        spanExcluir.appendChild(imgExcluir);
    });

}


//buscar um livro pelo id
const getByIdLivro = async function() {

}


//Limpar os campos do formulário
const resetForm = function() {
    document.getElementById('title').value = '';
    document.getElementById('subtitle').value = '';
    document.getElementById('image').value = '';
    document.getElementById('price').value = '';
}


botaoSalvar.addEventListener('click', function() {
    postLivro();
});


window.addEventListener('load', function() {
    getAllLivros();
});