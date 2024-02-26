// ARRAY
const frutas = ['Pera','Maça','Uva'];

// for (let i in frutas){
//    console.log(i);
// }

// for (let index in frutas){
//    console.log(frutas[index]);
// }

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//}

//OBJETOS
const pessoa = {
    nome: 'matheus',
    sobrenome: 'lucca',
    idade: 25,
};
//console.log(pessoa)
//console.log(pessoa.nome)
//console.log(pessoa['nome'])

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}
