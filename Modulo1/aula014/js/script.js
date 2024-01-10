const numero = Number(prompt('digite um numero:'));


const num1 = document.getElementById('num');

const texto1 = document.getElementById('texto');

num1.innerHTML = numero;

texto1.innerHTML = `<p> <b> Raiz quadrada: </b> ${numero ** 0.5}.</p>
                    <p> ${numero} <b> É inteiro: </b> ${Number.isInteger(numero)}.</p>
                    <p> <b> É NaN: </b> ${Number.isNaN(numero)}.</p>
                    <p> <b> Arredondando para Baixo: </b> ${Math.floor(numero)}.</p>
                    <p> <b> Arredondando para Cima: </b> ${Math.ceil(numero)}.</p>
                    <p> <b> Com duas casas decimais: </b> ${numero.toFixed(2)}.</p>`



/*

let num1 = 25.5118;
//let num2 = Math.floor(num1);  // arredonda pra baixo
//let num2 = Math.ceil(num1);   // arredonda pra cima
let num2 = Math.round(num1);    // arrodanda para o mais proximo
console.log(num2);

                    console.log(Math.max(1,2,5,6,8,9,10,51,151,))
                    console.log(Math.min(1,2,5,6,8,9,10,51,151,))
                    const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
                    console.log(aleatorio)
                    
                    console.log(25 ** 0.5); // raiz quadrada
                    
                    console.log (100 / 0); // Infinity




                    */