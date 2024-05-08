// Imprimir os primeiros 10 números da sequência de Fibonacci.
let num1 = 0
let num2 = 1

for (let fibonacci = 1; fibonacci <= 10; fibonacci++){
    console.log(num1);
    let num3 = num1 + num2
    num1 = num2
    num2 = num3
}