//break e continue
//continue continua para proxima iteração
// break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++)  {
//     let numero = numeros[i];
    
//     if(numero === 2) {
//         console.log('Pulei o numero 2')
//         continue;
//     }

//     console.log(numero);

//     if( numero === 7){
//         console.log('7 encontrado, saindo...')
//         break;
//     }
// }

let i = 0;
while (i < numeros.length)  {
    let numero = numeros[i];
    
    if(numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue;
    }

    console.log(numero);

    if( numero === 7){
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }
     
    i++;
}