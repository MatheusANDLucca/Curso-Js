
const resultado  = document.querySelector('.resultado');

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto; 
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto; 
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto; 
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;  
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;                     
    }
}

function getmesTexto(mesnome) {
    let mesTexto;

    switch (mesnome) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto; 
        case 3:
            mesTexto = 'Abril';
            return mesTexto; 
        case 4:
            mesTexto = 'maio';
            return mesTexto; 
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;  
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto; 
        case 9:
            mesTexto = 'Outubro';
            return mesTexto; 
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;  
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;                         
        default:
            mesTexto = '';
            return mesTexto;                     
    }
}

const data = new Date();
const diaSemana = data.getDay();
const mesnome = data.getMonth()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const mesTexto = getmesTexto(mesnome)

const dia = (data.getDate());
const ano = (data.getFullYear());
const hora = (data.getHours());
const min = (data.getMinutes());



resultado.innerHTML = `<p> ${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}<br> ${hora}:${min}</p>`
