/*
 Primitivos (imutáveis)- String, number, boolean, undefined, 
 null (bigint, symbol) - valor
*/
//          0123
let nome = 'luiz';

nome = 'joao'

console.log(nome[0])


let a = 'A';
let b = a; //copia
console.log(a, b)

a = 'B'
console.log(a, b)


//referencia é (mutavel) - array, object, function
let c = [1,2,3];
let d = [...c];
let e = c;

console.log(c, d)
 
c.push(4);
console.log(c, d)

d.pop();
console.log(c, d)

c.push('matheus');
console.log(e)



const aa = {
    nome: 'jose',
    sobrenome: 'luiz'
};
const bb = {...aa};   //isso não

//const bb = aa; // isso é mutavel
 
aa.nome = 'joao';

console.log(aa)
console.log(bb)







