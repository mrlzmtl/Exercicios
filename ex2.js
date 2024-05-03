// Exercício 2: Verificação de dia da semana

// Escreva um programa que solicita ao usuário um número de 1 a 7 
// representando um dia da semana e exibe o nome correspondente a esse dia. 
// Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

let numero = parseInt(prompt("Digite um número: "))

switch (numero) {
    case 1:
        alert("Segunda-feira");
        break;
    case 2:
        alert("Terça-feira");
        break;
    case 3:
        alert("Quarta-feira");
        break;
    case 4:
        alert("Quinta-feira");
        break;
    case 5:
        alert("Sexta-feira");
        break;
    case 6:
        alert("Sábado");
        break;
    case 7:
        alert("Domingo");
        break;
}

