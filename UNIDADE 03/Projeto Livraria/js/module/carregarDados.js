/**************************************************************************************************
 * Objetivo: Criar a comunicação entre a página HTML e os dados fornecidos de livros 
 * (arquivo de dados ou API)
 * Data: 22/04/2026
 * Autor: Jonathan Yuri Poli Siqueira
 * Versão: 1.0
 *************************************************************************************************/

import { livros } from "./livros.js";

// console.log(livros[0].books[2].title);

const setCreateCard = function (bibliotecaLivros) {
    let divCardProdutos = document.getElementById('cardProdutos');

    // Cria elementos no HTML
    let divCaixa_produto = document.createElement('div');

    // Adiciona um atributo para a div criada
    divCaixa_produto.setAttribute('class', 'caixa_produto');
    
    // Diz que um elemento é filho de outro elemento
    divCardProdutos.appendChild(divCaixa_produto);

    
}

window.addEventListener('load', function() {
    setCreateCard(livros)
});