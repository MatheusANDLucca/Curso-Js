// const nome = 'Matheus'
// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++
// }
// console.log('Segue a vida...')
//---------------------------------------------------

// função que cria numero random
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);// mudar para = 10  para usar o do while

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('#############')
// exemplo de 'do while'

do {
    //rand = random(min, max)
    console.log(rand)
}while (rand !== 10);