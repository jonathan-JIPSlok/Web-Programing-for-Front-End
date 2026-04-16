function somarValores() {
    // Função tradicional (antigo - pouco usado)
    var numero1 = document.getElementById("valor1");
    var numero2 = document.getElementById("valor2");

    var soma = Number(numero1.value) + Number(numero2.value);

    alert("A soma dos valores é: " + soma);
}

// Função anônima
var somarValoresNovos = function() {
    var numero1 = document.getElementById("valor1");
    var numero2 = document.getElementById("valor2");

    var soma = Number(numero1.value) + Number(numero2.value);

    alert("A soma é: " + soma);
}

// Função de Seta (arrow function)
var soma = () => {
    var numero1 = document.getElementById("valor1");
    var numero2 = document.getElementById("valor2");

    var soma = Number(numero1.value) + Number(numero2.value);

    alert("A soma dos valores 1 e 2 é: " + soma); 
}