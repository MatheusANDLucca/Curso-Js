const nome = 'joao'; //sempre com valor iniciando e não pode alterar o valor
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero)
console.log(typeof (primeiroNumero + segundoNumero))

/*
matheus lucca tem 30 Anos, pesa 84 Kg
tem 1.8 de altura e seu IMC é de 25.92554541819
matheus lucca nasceu em 1999
*/

const nome1 = 'Matheus';
const sobrenome = 'Lucca';
const idade = 24;
const peso = 72;
const altura = 1.62;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso/(altura * altura)
anoNascimento = 2024 - idade

console.log(nome1 , 'tem ',idade, 'Anos, pesa ',peso, 'tem ',altura, 'e seu IMC é de' ,imc,'.',nome1 ,sobrenome, 'nasceu em ',anoNascimento)