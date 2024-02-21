
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    console.log('ola')
    //resultadoImc('Ola ze')
    const peso = form.querySelector('.peso');
    console.log(peso.value)
    const altura = form.querySelector('.altura');
    console.log(altura.value)
    const p = Number(peso.value)
    const a = Number(altura.value)  
    let imc; //peso / (altura * altura)
    imc = p/(a * a)

    if(imc < 18.5 ){
        resultado.innerHTML = `<p style="background: rgb(212, 250, 255)"> Você está <b>Abaixo do peso</b>. com o imc: ${imc}</p>`
       } else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = `<p style="background: blue"> Você está com o <b>peso normal</b>. com o imc: ${imc}</p>`
       } else if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML = `<p style="background: green"> Você está com <b>sobrepeso</b>. com o imc: ${imc}</p>`       
    }else if(imc >= 30 && imc <= 34.9){
        resultado.innerHTML = `<p style="background: orange"> Você está com <b>Obesidade grau 1</b>. com o imc: ${imc}</p>`       
    }else if(imc >= 35 && imc <= 39.9){
        resultado.innerHTML = `<p style="background: pink"> Você está com <b>Obesidade grau 2</b>. com o imc: ${imc}</p>`       
    }else if(imc >= 40 ){
        resultado.innerHTML = `<p style="background: red"> Você está com <b>Obesidade grau 3 </b>. com o imc: ${imc}</p>`       
    }else{
        resultado.innerHTML = `<p style="background: grey"><b> Invalido.</b></p>`
       }
    console.log(imc)
});
