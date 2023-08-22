function testeValor(a){
    while(true){
            //alert('while')
            alert('Digite apenas números. Nº de tentativas: ' + tentativas );
            tentativas = tentativas - 1;

            nota = Number(prompt('Digite a sua ' +i+ 'º nota'));
            if(Number.parseInt(nota)){
                notas += nota;
                break
            }
            if(tentativas === 0){
                alert('Encerrando por excesso de tentativas errada!')
                i = 4  
                break
            }
    }

    

}


let notas = 0;
let mediaMinima = 7;
let faltaLimiteMax = 20;
for(let i = 1; i <= 4; i++){

    let nota = Number(prompt('Digite a sua ' +i+ 'º nota'));
    if(nota >= 0 && nota <= 10 && Number.parseInt(nota)){
        notas += nota
        let media = notas/4;
        //alert("até aqui tudo certo")
        if(i === 4){
            let diasAula = Number(prompt('Digite a quantidade de dias de aulas '))
            let falta = Number(prompt('Digite quantidade de faltas '))
            let percentualFaltas = (falta / diasAula) * 100
            
            if(media >= mediaMinima && media <= 10 && percentualFaltas < faltaLimiteMax){
                document.write(`Aprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

            }else if(media >= 3 && media < mediaMinima && percentualFaltas < faltaLimiteMax){
                document.write(`Em recuperação com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas.`)

            }else if(media >= 0 && media < 3 || percentualFaltas < faltaLimiteMax){
                document.write(`Reprovado com média ${media} e com ${percentualFaltas.toFixed(2)}% de faltas!`)
            
            }
        }
            
    }else if(true){
        //alert('entrou no else if')
        let tentativas = 3
        while(true){
            //alert('while')
            alert('Digite apenas números. Nº de tentativas: ' + tentativas );
            tentativas = tentativas - 1;
            nota = Number(prompt('Digite a sua ' +i+ 'º nota'));
            if(Number.parseInt(nota) && nota >= 0 && nota <= 10){
                notas += nota;
                break
            }
            if(tentativas === 0){
                alert('Encerrando por excesso de tentativas errada!')
                i = 4  
                break
            }
        }

    }
        
}