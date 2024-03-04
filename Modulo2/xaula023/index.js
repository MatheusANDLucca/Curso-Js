// try {
//     //console.log(a)
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('fechei um arquivo');

//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Tambem sou finally')
//     }

// } catch (e) {
//     //é executada quando ha erros
//     console.log('Tratando o erro');
// } finally {
//     //sempre é executada
//     console.log('FINALLY: eu sempre sou executado');
// }

function retornaHora(data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora)
} catch(e){
    //tratar erro
    //console.log(e);
}finally{
    console.log('Tenha um bom erro')
}