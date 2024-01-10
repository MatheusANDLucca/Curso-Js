let num1 = 0.7;
let num2 = 0.1;
//console.log(num1.toString() + num2);
//console.log(typeof num1)
//console.log(num1.toString(2));   --- binario
//console.log(num1.toFixed(4));    --- casas decimais
//console.log(Number.isInteger(num1)); --- ver se é inteiro
//let temp = num1 * 'Ola';
//console.log(Number.isNaN(temp))

//num1 += num2; // num1 = num1 + num2  = 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100;
//num1  = Number(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1));


