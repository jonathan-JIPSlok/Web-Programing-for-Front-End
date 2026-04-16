alert("Hello, World!");

var nome = prompt("Digite seu Nome: ");

alert('Meu nome é ' + nome);

var resultado = confirm("Você é um estudante de Front-End?");

if (resultado) {
    alert("Parabéns, " + nome + "! Você é um estudante de Front-End!");
}

console.log("Area de depuração do navegador");
console.log(resultado);