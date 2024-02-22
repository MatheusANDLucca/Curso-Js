/*
const container = document.querySelector('.container');
const div = document.createElement('div');
  
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].tag);

    const p = document.createElement(resultado[i].tag);
    p.innerHTML = elementos[i].texto;
    div.appendChild(p.elementos[i].tag);
}
*/
const elementos = [
    {tag: 'p', texto: 'Um texto'},
    {tag: 'div', texto: 'Um texto 2'},
    {tag: 'footer', texto: 'Um texto 3'},
    {tag: 'section', texto: 'Um texto 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');  

for (let i = 0; i < elementos.length; i++) {
    
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}
container.appendChild(div);
