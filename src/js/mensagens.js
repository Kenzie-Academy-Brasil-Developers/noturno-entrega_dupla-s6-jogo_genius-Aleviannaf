function mensagemDePreparo(){
    let delay =2000;
    const mensagemPreparo= document.createElement('span');
    mensagemPreparo.classList.add('mensagemAcertou');
    mensagemPreparo.innerText= "Prepare-se para proxima rodada!\n 3 2 1...";
    chamarFuncaoStart.appendChild(mensagemPreparo);


    setTimeout(() => { chamarFuncaoStart.removeChild(mensagemPreparo); }, 2000);
    delay+=1000;
    setTimeout(()=>{
        mensagemIniciou();
    },delay)
    
}


function mensagemDeAcerto(){
    let delay =1000;
    const mensagemAcertou= document.createElement('span');
    mensagemAcertou.classList.add('mensagemAcertou');
    mensagemAcertou.innerText= "Acertou!";
    chamarFuncaoStart.appendChild(mensagemAcertou);


    setTimeout(() => { chamarFuncaoStart.removeChild(mensagemAcertou); }, 2000);
    delay+=1000;
    setTimeout(()=>{
        mensagemDePreparo();
    },delay)
    
}

function mensagemDeErro(){
    let delay =1000;
    const mensagemErrou= document.createElement('span');
    mensagemErrou.classList.add('mensagemAcertou');
    mensagemErrou.innerText= "Errou, my bad!";

    chamarFuncaoStart.appendChild(mensagemErrou);
    
    
    setTimeout(() => { chamarFuncaoStart.removeChild(mensagemErrou); }, 2000);
    delay+=1000;
    setTimeout(()=>{
        mensagemDeScore();
    },delay)
}

function mensagemDeScore(){
    const mensagemErrou= document.createElement('span');
    const button= document.createElement('button');
    mensagemErrou.classList.add('mensagemScore');
    mensagemErrou.innerText= `Score \n Total de rodadas: ${armazenaJogadaEmNumber.length} \n Sua Pontuação: ${armazenaJogadaEmNumber.length -1}`;
    button.classList.add('btnReiniciar');
    button.innerText = "Reinicar";

    chamarFuncaoStart.appendChild(mensagemErrou); 
    chamarFuncaoStart.appendChild(button);    
}




function mensagemParabens(){
    const mensagemdeParabens= document.createElement('span');
    mensagemdeParabens.classList.add('mensagemScore');
    mensagemdeParabens.innerText= `Parabéns você zerou o Jogo \n Sua Pontuação: ${armazenaJogadaEmNumber.length}`;
    chamarFuncaoStart.appendChild(mensagemdeParabens);
     
}







