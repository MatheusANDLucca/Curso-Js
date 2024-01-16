/**
 * && -> false && true -> false "o valor mesmo"
 * || ->true && false -> true "vai retornar o valor mesmo"
 * 
 * 
 * FALSY
 * *false
 * 0 
 * '' "" `` (vazias) 
 * null /  undefined
 * NaN
 * 
 */
//                      AND

 console.log('Luiz' && undefined && 'maria');

 function fala01(){
    return 'Oi';
 }
 let vaiExecutar = 'joao';

 console.log(vaiExecutar && fala01());

//                     OR


 console.log(0 || false || null || 'luiz' || true)


const corUsuario = null
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // este é o correto
const d = false;
const e = NaN;

console.log(a || b || c || d || e);