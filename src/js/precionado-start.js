const chamarFuncaoStart = document.querySelector('.infos');

//tela de startando jogo

function iniciandoJogo() {
    
    const spanInciando = document.createElement('span');
    spanInciando.classList.add('iniciandoJogo');
    spanInciando.innerText = "Inciando Jogo em \n 3 2 1 ..."
    chamarFuncaoStart.appendChild(spanInciando);
    jogadaDaMaquina();

}


// tela de Bem vindo usuario
function montarApresentacao() {
    let delay =1000;
    const spanApresentacao = document.createElement('span');
    spanApresentacao.classList.add('welcomeNoGame');
    spanApresentacao.innerText = `Bem vindo ao jogo ${nome}`;
    chamarFuncaoStart.appendChild(spanApresentacao);

    setTimeout(() => { chamarFuncaoStart.removeChild(spanApresentacao); }, 2000);
    
    delay+=1000;

   setTimeout(()=>{
       iniciandoJogo();
   },delay)
}



//Função que escuta o click no start
function clickStart(event) {
    let delay = 1000;
    const botaoStart = document.querySelector('.startNoGame');
    const click = event.target.classList[0];


    setTimeout(() => {
        if (click === 'startNoGame') {
            chamarFuncaoStart.removeChild(botaoStart);
        }
    }, delay);

    delay+=1000;

    setTimeout(()=>{
        montarApresentacao();
    }, delay);

    
}

chamarFuncaoStart.addEventListener('click', clickStart);