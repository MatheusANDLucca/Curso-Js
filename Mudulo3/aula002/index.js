// Arguments = quando você passa uma funcao sem declarar nada.
// e chama passando parametros 
function funcao(a,b,c) { // se quiser pode criar argumentos nao interfere
    let total = 0;
    for(let argumento of arguments){ // continua somando 
        total += argumento;
    }
    
    console.log(total, a,b,c);
}
funcao(1 ,2 ,3 ,4 ,5 ,6 ,7);