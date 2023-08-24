function confereValorEntrada(a, b){
    if(!isNaN(a) && !isNaN(b)){
        return (b/a)*100
    }else{
        return 'valorInvalido' 
    }
}



let notas = 0;
let mediaMinima = 7;
let faltaLimiteMax = 20;

// For pra rodar apenas 4 vezes quando o valor inserido pelo usuário estiver correto
for (let i = 1; i <= 4; i++) {

    let nota = Number(prompt('Digite a sua ' + i + 'º nota'));

    // validação do valor recebido pelo usuário
    //Javascript nem sempre reconhce o 0 como um valor numérico zero 
    if (nota >= 0 && nota <= 10 && Number.parseInt(nota) || nota === 0) {
        notas += nota
        let media = notas / 4;

        //Quando a váriavel (i) do for, for = a 4 entra nesse if
        if (i === 4) {
            //entrada do usuário para a porcentagem de falta. 
            //Obs: ainda não tem validação para o tipo de entrada se é um Number ou String
            let diasAula = Number.parseInt(prompt('Digite a quantidade de dias de aulas '))
            let falta = Number.parseInt(prompt('Digite quantidade de faltas '))
            //let percentualFaltas = (falta / diasAula) * 100
            let percentualFaltas = confereValorEntrada(diasAula, falta)
            
            let cont = 3;
            while(percentualFaltas == 'valorInvalido'){
                
                alert('Digite apenas números  Nº de tentativas: ' + cont)
                cont -=1;
                diasAula = Number.parseInt(prompt('Digite a quantidade de dias de aulas '))
                falta = Number.parseInt(prompt('Digite quantidade de faltas '))
                if(cont == 0){
                    alert('Encerrando por excesso de tentativas errada!')
                    break
                }else if(!isNaN(diasAula) && !isNaN(falta)){
                    percentualFaltas = confereValorEntrada(diasAula, falta)
                    break
                }

            }

            if (media >= mediaMinima && media <= 10 && percentualFaltas < faltaLimiteMax) {
                document.write(`Aprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

            } else if (media >= 3 && media < mediaMinima && percentualFaltas < faltaLimiteMax) {
                document.write(`Em recuperação com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

            } else if (media >= 0 && media < 3 || percentualFaltas < faltaLimiteMax) {
                document.write(`Reprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas!`)

            }
        }

    } else if (true) {

        let tentativas = 3
        while (true) {
            //repete a pergunta mostrando a quantidades de tentativas
            //para o usuário após inserir a entrada com valor errado
            alert('Digite apenas valores de 0 à 10. Nº de tentativas: ' + tentativas);
            tentativas = tentativas - 1;
            nota = Number(prompt('Digite a sua ' + i + 'º nota'));
            if (Number.parseInt(nota) && nota >= 0 && nota <= 10) {
                notas += nota;
                break
            }

            //se a quantidade de tentativas atingir o valor 0 encerra o programa
            if (tentativas === 0) {
                alert('Encerrando por excesso de tentativas errada!')
                i = 4
                break
            }
        }

    }

}