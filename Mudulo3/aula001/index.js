//Declaração de função (Function hoisting) = pode ser chamada de qualquer lugar do codigo.
falaOi();
function falaOi() {
    console.log('Oi')
}

//first-class (Objetos de primera classe)
//Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow()


// Dentro de um objeto
const obj = {
    falar: function(){
        //falar(){
        console.log('Estou Falando...');
    }
};
obj.falar();