function salvarDados() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");

    console.log(nome.value);
    console.log(email.value);
    console.log(telefone.value);

    var dados = document.getElementsByTagName("input");

    console.log(dados[0].value);
    console.log(dados[1].value);
    console.log(dados[2].value);

    var dadosClass = document.getElementsByClassName("input");
    
    console.log(dadosClass[0].value);
    console.log(dadosClass[1].value);
    console.log(dadosClass[2].value);

    var caixaNome = document.querySelector("#nome");
    console.log(caixaNome.value);

    var caixaNome = document.querySelector(".input");
    console.log(caixaNome.value);

    var caixaDados = document.querySelectorAll(".input");
    console.log(caixaDados[0].value);
    console.log(caixaDados[1].value);
    console.log(caixaDados[2].value);

    var h1 = document.getElementsByTagName("h1");
    console.log(h1[0].innerText);
}