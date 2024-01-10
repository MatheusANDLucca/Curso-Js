/*               objeto simples
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/*    
function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('matheus', 'lucca', 24)
const pessoa2 = criaPessoa('jose', 'lucca', 24)
const pessoa3 = criaPessoa('tiao', 'lucca', 24)
const pessoa4 = criaPessoa('ruan', 'lucca', 24)
const pessoa5 = criaPessoa('kaua', 'lucca', 24)

console.log(pessoa1)

console.log(pessoa1.nome, pessoa2.nome)
*/

const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi minha idade é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
