//Escreva uma função que recebe um numero e retorne o seguinte:
// numero é divisivel por 3 = Fizz
// numero é divisivel por 5 = Buzz
// numero é divisivel por 3 e 5 = fizzbuzz
// numero nao é divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero = retorna o proprio numero
//use a função com numeros de 0 a 100

function divisao(num) {
  if (num >= 0 && num <= 100 ) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz')
    } else if (num % 3 === 0) {
      console.log('Fizz')
    } else if (num % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(num)
    }
  } else {
    console.log('numero invalido ou não é um numero')
    
  }

}

for (let i = 0; i <= 100; i++){
  console.log()
}

divisao(9)    