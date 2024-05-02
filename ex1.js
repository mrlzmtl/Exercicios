// Exercício 1: Verificação de login

// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. 
// Verifique se o nome de usuário é "admin" e a senha é "senha123". 
// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

let username = prompt("Informe o nome de usuário: ")
let senha = prompt("Informe a senha: ")

if (username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido!");
}else{
    console.log("Você não tem permissão de acesso!");
}