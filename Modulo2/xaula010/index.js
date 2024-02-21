/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/
//...rest, ...spread
//                0      1     2     3     4     5     6     7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero,terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto);

//                   0          1          2
//                1  2  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numero[1][2]);

const [,[,,seis]] = numero; //modo 1
console.log(seis);

const [lista1, lista2, lista3] = numero; //modo 2

console.log(lista3);
console.log(lista3[2]);
