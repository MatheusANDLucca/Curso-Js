const pessoa = {
    nome: 'matheus',
    sobrenome: 'lucca',
    idade: 25,
    endereco: {
        rua: 'taquaril',
        numero: 149
    },
    comentario: 'bla bla bla'
};
// Atribuição via desestruturação
//const { nome: n = '', sobrenome, idade, endereco } = pessoa;
//console.log(n , sobrenome, idade);

const {nome, sobrenome,idade, endereco: {rua: r = 123, numero }, endereco, ...resto} = pessoa; 
console.log(nome,sobrenome,idade, endereco, resto);

