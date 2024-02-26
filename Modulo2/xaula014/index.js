
// ARRAYS
//                       for classico - geralmente com iteraveis(array ou strings)
//                       for in - retorna o indice ou chave (string, array ou objetos)
//                       for of - retorna o valor em si (iteraveis, arrays ou strings)

//            01234
const nomes = ['Matheus','Lucca', 'luiz'];

console.log('***********************************')

 for (let i = 0; i < nomes.length; i++) {
     console.log(nomes[i]);
 }
console.log('***********************************')
 for (let i in nomes) {
     console.log(nomes[i]);
 }
console.log('***********************************')
for (let valor of nomes){
    console.log(valor);
}
console.log('***********************************')

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});
console.log('***********************************')

//
//OBJETOS
//const pessoa = {
//    nome: 'matheus',
//    sobrenome: 'lucca',
//};
//for (let chave in pessoa){
//    console.log(chave, pessoa[chave]);
//}
//console.log('***********************************')
