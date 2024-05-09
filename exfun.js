function pares() {
    for (let contador = 1; contador <= 10; contador++) {
        if (contador % 2 == 0) {
            console.log(contador);
        }
    }
}

function tabuada() {
    let num = parseInt(prompt("Digite um número: "))

    for (let tab = 1; tab <= 10; tab++) {
        console.log(num * tab);
    }
}

function maioridade() {
    let idade = parseInt(prompt("Digite sua idade: "))

    while (idade < 18) {
        let idd = parseInt(prompt("Digite sua idade novamente: "))
        idade = idd
    }
    if (idade >= 18) {
        console.log("Você é maior de idade!");
    }
}

function notas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"))
    let nota2 = parseFloat(prompt("Digite a segunda nota:"))
    let nota3 = parseFloat(prompt("Digite a terceira nota:"))
    let nota4 = parseFloat(prompt("Digite a quarta nota:"))

    let total = nota1 + nota2 + nota3 + nota4
    let media = total / 4

    if (media >= 7.0) {
        alert("APROVADO")
    }

    if (media < 7.0 && media > 5.0) {
        alert("RECUPERAÇÃO")
    }

    if (media < 5.0) {
        alert("REPROVADO")
    }
}

function imcCalculo() {
    let peso = parseFloat(prompt("Digite o seu peso em kg: "))
    let altura = parseFloat(prompt("Digite a sua altura em metros: "))

    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        alert("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal")
    } else if (imc >= 25.0 && imc <= 29.9) {
        alert("Sobre peso")
    } else if (imc >= 30.0 && imc <= 34.9) {
        alert("Obesidade grau 1")
    } else if (imc >= 35.0 && imc <= 39.9) {
        alert("Obesidade grau 2")
    } else if (imc > 40.0) {
        alert("Obesidade grau 3")
    }
}

function login() {
    let username = prompt("Informe o nome de usuário: ")
    let senha = prompt("Informe a senha: ")

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!");
    } else {
        console.log("Você não tem permissão de acesso!");
    }
}

let opcao = parseInt(prompt("Escolha de 1 a 6 para executar um exercício: \n1 - Pares\n2 - Tabuada\n3 - Maioridade\n4 - Média de notas\n5 - Cálculo de IMC\n6 - Login\nDigite 0 para sair"))

switch (opcao) {
    case 1:
        pares()
        break;
        
    case 2:
        tabuada()
        break;

    case 3:
        maioridade()
        break;

    case 4:
        notas()
        break;

    case 5:
        imcCalculo()
        break;

    case 6:
        login()
        break;

    default:
        break;
}