const main = document.querySelector('main');


function restart(event){
    let novoNome = nome;
    limpaArray(armazenaJogadaEmNumber);
    limpaArray(jogadaSalva);
    if(event.target.classList[0] ==="btnReiniciar"){
        

        window.location.href=`jogo.html?${novoNome}`;

    }
}


chamarFuncaoStart.addEventListener('click', restart);