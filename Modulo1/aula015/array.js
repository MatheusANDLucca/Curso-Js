//                 0       1        2
const alunos = ['luiz', 'maria', 'joao'];
console.log(alunos);
console.log(alunos[0]); // acessar o indice

alunos[0] = 'matheus'; //alterando array na posição '0'
console.log(alunos)
alunos[3] = 'lucca'; //inclui array na posição '3'
console.log(alunos)
console.log(alunos.length) // descobrir o tamanho do array

alunos[alunos.length] = 'jose';  //inclui array na ultima posição 'length'(ultima)
alunos[alunos.length] = 'maria';

console.log(alunos)

alunos.push ('luiza') // adiciona no fim do array
alunos.push ('fabio') // adiciona no fim do array

console.log(alunos)

alunos.unshift('seu osvaldo'); // adiciona no inicio do array
alunos.unshift('seu valdemiro'); // adiciona no inicio do array
console.log(alunos)


const removido = alunos.pop();// remove o ultimo do array
console.log(removido);    
console.log(alunos)

const removido2 = alunos.shift(); //remove o primeiro do array
console.log(removido2);    
console.log(alunos)


delete alunos[1]  //elimina o indice por completo
console.log(alunos)

console.log(alunos[50]); //se nao existe é undefined

alunos.push('claudio')
alunos.push('claudia')

console.log(alunos.slice(0, 2))  // buscar somente a parte do array desejado 'fatiamento'

console.log(typeof alunos);  // array é um object

console.log(alunos instanceof Array); //Saber se é um array - se true é um array


