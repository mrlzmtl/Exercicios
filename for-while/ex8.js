// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.
let idade = parseInt(prompt("Digite sua idade: "))

while (idade < 18) {
    let idd = parseInt(prompt("Digite sua idade novamente: "))
    idade = idd
}
if (idade >= 18) {
    console.log("Você é maior de idade!");
}