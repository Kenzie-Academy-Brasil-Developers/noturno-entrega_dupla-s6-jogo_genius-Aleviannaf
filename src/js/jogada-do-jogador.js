
//array para salvar jogada
const jogadaSalva = [];

//Função que acende luzes e armazena jogada (praticamente um clone da primeira)
function luzesJogada(cor){

    const boxRed = document.querySelector('.red');
    const boxBlue = document.querySelector('.blue');
    const boxGreen = document.querySelector('.green');
    const boxYellow = document.querySelector('.yellow');

    if(cor === 'red'){
        boxRed.id = 'red';

        jogadaSalva.push('red');

    }else if(cor === 'blue'){
        boxBlue.id = 'blue';

        jogadaSalva.push('blue');

    }else if(cor === 'green'){
        boxGreen.id = 'green';

        jogadaSalva.push('green');
                
    }else if(cor === 'yellow'){
        boxYellow.id = 'yellow';

        jogadaSalva.push('yellow');
    }

    setTimeout(function(){
        boxRed.id = '';
        boxBlue.id = '';
        boxGreen.id = '';
        boxYellow.id = '';
    },400);
}

//function que identifica cliques da jogada
function corClicada(event){
    const cor = event.target.classList[1];

    if(cor === 'red'){
        luzesJogada(cor);

    }else if(cor === 'blue'){
        luzesJogada(cor);

    }else if(cor === 'green'){
        luzesJogada(cor);

    }else if(cor === 'yellow'){
        luzesJogada(cor);
    }
}
//const botaoCorClicada = document.querySelector('.jogo');
//botaoCorClicada.addEventListener('click',corClicada);