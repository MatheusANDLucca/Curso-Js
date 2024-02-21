//(condição) ? 'valor para verdadeiro' : 'valor para falso' = operação ternaria
const pontuacaoUsuario = 999;
//                               (condição) ? 'valor para verdadeiro' : 'valor para falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario)

const corUsuario = null;
//              -
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao)

//if (pontuacaoUsuario >= 1000) {
//    console.log('Usuario VIP');
//}else{
//    console.log('Usuario normal');
//}