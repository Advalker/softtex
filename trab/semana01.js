const input = require('readline-sync');

//1. Faça um programa que calcule a soma de 5 números, e mostra o resultado da soma para o usuário.

// let valor = Number(input.question('Digite um valor: '));

// for(let i = 0; i < 4; i++){
//     //console.log(valor)
//     let valores = Number(input.question('Digite outro valor: '));
//     valor += valores
// }

// console.log('A soma de todos dos valores é :', valor)

//2. Faça um programa que solicite que o usuário informe 4 valores e calcule a média dos valores informados. Mostra o resultado da média para o usuário.

let nota = parseFloat(input.question('Digite sua nota: '));

for(let i = 0; i < 3; i++){
    let notas = parseFloat(input.question('Digite outra nota: '));
    nota += notas

}

console.log('A sua média é: ', nota/4)