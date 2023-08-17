let nota = parseFloat(input.question('Digite sua nota: '));

for(let i = 0; i < 3; i++){
    let notas = parseFloat(input.question('Digite outra nota: '));
    nota += notas

}

console.log(nota)