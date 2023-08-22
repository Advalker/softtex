//const input = require('readline-sync');

//1. Faça um programa que calcule a soma de 5 números, e mostra o resultado da soma para o usuário.

// let valor = Number(input.question('Digite um valor: '));

// for(let i = 0; i < 4; i++){
//     //console.log(valor)
//     let valores = Number(input.question('Digite outro valor: '));
//     valor += valores
// }

// console.log('A soma de todos dos valores é :', valor)

//2. Faça um programa que solicite que o usuário informe 4 valores e calcule a média dos valores informados. Mostra o resultado da média para o usuário.

// let nota = parseFloat(input.question('Digite sua nota: '));

// for(let i = 0; i < 3; i++){
//     let notas = parseFloat(input.question('Digite outra nota: '));
//     nota += notas

// }

// console.log('A sua média é: ', nota/4)

// 3. Faça um programa que solicite três números ao usuário e mostre qual o maior e qual o menor dos três.

// function maiorMenor(a, b, c){
//     if(a>b && a>c){
//         console.log(' Esse é o maior valor', a);
//     }else if(a<b && a<c){
//         console.log(' Esse é o menor valor ', a)
//     }

//     if(b>a && b>c){
//         console.log(' Esse é o maior valor', b);
//     }else if(b<a && b<c){
//         console.log(' Esse é o menor valor ', b)
//     }

//     if(c>a && c>b){
//         console.log(' Esse é o maior valor', c);
//     }else if(c<a && c<a){
//         console.log(' Esse é o menor valor ', c)
//     }
// }

// let n1 = Number(input.question(' Digite um valor: '));
// let n2 = Number(input.question(' Digite outro valor: '));
// let n3 = Number(input.question(' Digite outro valor: '));

// maiorMenor(n1, n2, n3);

// 4. Faça um programa para verificar se uma pessoa pode doar sangue, para doar sangue é necessário ter entre 15 e 70 anos. O programa deve perguntar a idade de uma pessoa e dizer se ela pode doar sangue ou não

// let nome = input.question(' Nome: ');
// let idade = Number(input.question(' Idade: '));

// if( idade >= 15 && idade <= 70){
//     console.log(`Olá ${nome}, você pode doar`);
// }else{
//     console.log(`Desculpe ${nome}, mas você não pode doar`)
// }


// 5. Faça um programa que leia o nome do usuário, a idade do usuário, o nome da mãe do usuário, a idade da mãe do usuário, o nome do pai do usuário e a idade do pai do usuário. O programa deverá imprimir na tela quantos anos a mãe e o pai do usuário tinham quando ele nasceu. A resposta deve ter o formato deste exemplo: Carlos, quando você nasceu, Dona Cecília tinha 27 anos e Seu Paulo tinha 32 anos



// let nomeUser = input.question(' Digite seu nome: ')
// let idadeUser = Number(input.question(' Digite sua idade: '))
// let nomeMae = input.question(' Digite o nome da sua mae: ')
// let idadeMae = Number(input.question(' Digite a idde da sua mae: '))
// let nomePai = input.question(' Digite o nome do seu pai: ')
// let idadePai = Number(input.question(' Digite a idade do se pai: '))

// let primeiraIdadeMae = idadeMae - idadeUser
// let primeiraIdadePai = idadePai - idadeUser

// console.log(`${nomeUser} quando você nasceu, Dona ${nomeMae} tinha ${primeiraIdadeMae} anos e Seu ${nomePai} tinha ${primeiraIdadePai} anos`)

// 6. Faça um programa que solicite que o usuário informe 4 valores e calcule a média dos valores informados e informa se o aluno foi aprovado ou reprovado. Para que o aluno seja aprovado sua nota tem que ser maior ou igual a 7 e menor ou igual a 10. O aluno será reprovado se sua nota for menor que 7. Mostra o resultado da média para o usuário e informe se o aluno foi aprovado ou reprovado.



// let nota = parseFloat(input.question('Digite sua nota: '));

// for(let i = 0; i < 3; i++){
//     let notas = parseFloat(input.question('Digite outra nota: '));
//     nota += notas;
//     let media = nota / 4;
    
//     if(i===2){
        
//         if (media >= 7 && media <=10){
//             console.log("Aprovado com média ", media)
//         }else if(media >= 0 && media < 7){
//             console.log('Reprovado com média ', media)
//         }
//     }
// }


// 7. Faça um programa usando o laço de repetição “FOR” que mostra na tela para o usuário todos os números entre 10 e 50.

// for(let i = 11; i < 50; i++){
//     console.log(i)
// }

// 8. Faça um programa usando o laço de repetição “while” que mostra na tela para o usuário todos os números entre 10 e 50.

// let cont = 11;

// while(cont != 49){
//     cont = cont+1
//     console.log(cont)
// }

// let falta = 5;
// let diasAula = 200;

// let porcentoFalta = (falta / 100) * diasAula

// document.write(porcentoFalta)

// let notas = 0;
// let mediaMinima = 7;
// let faltaLimiteMax = 20;
// for(let i = 1; i <= 4; i++){

//     let nota = Number(prompt('Digite a sua ' +i+ 'º nota'));
//     if(isNaN(nota) && nota >= 0 && nota <= 10){
//         notas += nota
//         let media = notas/4;

//         if(i === 4){
//             let diasAula = Number(prompt('Digite a quantidade de dias de aulas '))
//             let falta = Number(prompt('Digite quantidade de faltas '))
//             let percentualFaltas = (falta / diasAula) * 100
            
//             if(media >= mediaMinima && media <= 10 && percentualFaltas < faltaLimiteMax){
//                 document.write(`Aprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

//             }else if(media >= 3 && media < mediaMinima && percentualFaltas < faltaLimiteMax){
//                 document.write(`Em recuperação com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

//             }else if(media >= 0 && media < 3 || percentualFaltas < faltaLimiteMax){
//                 document.write(`Reprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas!`)
            
//             }
//         }
            
//     }else{
//         alert('Valor Inválido');
//         break
        
//     }
        
// }


// let notas = 0;
// let mediaMinima = 7;
// let faltaLimiteMax = 20;
// for(let i = 1; i <= 4; i++){

//     let nota = Number.parseInt(prompt('Digite a sua ' +i+ 'º nota'));
//     if(Number.parseInt(nota) || nota >= 0 || nota <= 10){
//         notas += nota
//         let media = notas/4;
        
//         if(i === 4){
//             let diasAula = prompt('Digite a quantidade de dias de aulas ')
//             let falta = prompt('Digite quantidade de faltas ')
//             let percentualFaltas = (falta / diasAula) * 100
            
//             if(media >= mediaMinima && media <= 10 && percentualFaltas < faltaLimiteMax){
//                 document.write(`Aprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

//             }else if(media >= 3 && media < mediaMinima && percentualFaltas < faltaLimiteMax){
//                 document.write(`Em recuperação com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

//             }else if(media >= 0 && media < 3 || percentualFaltas < faltaLimiteMax){
//                 document.write(`Reprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas!`)
            
//             }
//         }        
//     }
//     let tentativas = 3;
//     while(!isNaN(nota)){
//         tentativas = tentativas - 1;
//         alert('Digite apenas números! Você tem apenas ' + tentativas + 'tentativas' );
//         nota = Number(prompt('Digite a sua ' +i+ 'º nota'));
//         if(Number.parseInt(nota) && nota >= 0 && nota <= 10){
//             notas += nota;
//             break
//         }else if(tentativas == 0){
//             alert('Encerrando por excesso de tentativas errada!')
//             i = 4
            
//         }
//     }
        
// }
