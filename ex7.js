// Exercício 7: Cálculo de desconto progressivo

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. 
// Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, 
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let valor = parseFloat(prompt("Digite o valor de sua compra:"))

if (valor <= 100.00) {
    alert("Sem desconto")
} else if (valor > 100.00 && valor <= 200.00) {
    alert("Desconto de 10%. Valor final de compra: " + Math.round(valor**0.9))
} else if (valor > 200.00){
    alert("Desconto de 20%. Valor final de compra: " + Math.round(valor**0.8))
}