//escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//retorne true se a imagem estiver no modo paisagem.

//MEU MODO
// function ePaisagem(largura,altura){
//     if(largura > altura){
//         console.log(largura > altura)
//         console.log('paisagem')
//     }else if(largura === altura){
//         console.log('Quadrada')
//     }else{
//         console.log('Retrato')
//     }
// }
// ePaisagem(100, 1000);

//==========================================================================
//MODO DO CURSO
// function ePaisagem(largura, altura){
//     return largura > altura;
// }
// console.log(ePaisagem(1920, 1080));

//==========================================================================

//MODO ARROW FUNCTION
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));