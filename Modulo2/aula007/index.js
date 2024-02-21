// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);  //01/01/1970 Timestamp unix ou epoca unix

const data = new Date();
const data2 = new Date(1706049437277);
const data1 = new Date('2024-01-20 20:20:59');
console.log(data1.toString());
console.log(data.toString());

console.log('Dia:', data.getDate());
console.log('Mes:', data.getMonth());
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Min:', data.getMinutes());
console.log('Seg:', data.getSeconds());
console.log('Ms:', data.getMilliseconds());
console.log('Dia semana:', data.getDay());
console.log(data.toString());
console.log(Date.now())

console.log(data2)