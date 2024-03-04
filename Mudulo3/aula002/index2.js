// argumentos que sustenta todos os argumentos enviados
// function funcao(a, b, c, d, e, f) { 
//     console.log(a, b, c, d, e, f);
// }
// funcao(1 ,2 ,3);

// function funcao(a, b = 2, c = 4){
//     //b = b || 2; maneira antiga de se resolver

//     console.log(a + b + c);
// }
// funcao(2, undefined, 20) //unica maneira dele assumir o valor padrao
//                          // caso nao queira declarar nenhum colocar null

//-----------------------------------------------objeto
// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'matheus', sobrenome: 'lucca', idade: 25 };

// funcao(obj)

// //-----------------------------------------------array
// function funcao2([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }

// funcao2(['Matheus Lucca', 'Jesus', 25])

// //---------------------------------------------------------------------------------

const conta = function(operador, acumulador, ...numeros) {
    
    for(let numero of numeros) {
        console.log(numero);
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50);

