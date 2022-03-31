//Função que cria o tabuleiro do Genius.
function criaTabuleiroDoJogo(){

    const main = document.getElementById('jogo');

    const boxRed = document.createElement('div');
    boxRed.setAttribute('class','box red');
    boxRed.setAttribute('id','');


    const boxBlue = document.createElement('div');
    boxBlue.setAttribute('class', 'box blue');
    boxBlue.setAttribute('id','');


    const boxGreen = document.createElement('div');
    boxGreen.setAttribute('class', 'box green');
    boxGreen.setAttribute('id','');


    const boxYellow = document.createElement('div');
    boxYellow.setAttribute('class', 'box yellow');
    boxYellow.setAttribute('id','');


    const boxInfos = document.createElement('div');
    boxInfos.setAttribute('class', 'box infos');

    main.appendChild(boxRed);
    main.appendChild(boxBlue);
    main.appendChild(boxGreen);
    main.appendChild(boxYellow);
    main.appendChild(boxInfos);

}
criaTabuleiroDoJogo();

//cria numero pra associar a cor
function corRandomica(){
    
    return Math.trunc(Math.random() * 4) + 1;
}

//array para salvar as cores
const coresSalvas = [];

// Função que assosia numero a cor.
function associandoNumACores(num){

    const boxRed = document.querySelector('.red');
    const boxBlue = document.querySelector('.blue');
    const boxGreen = document.querySelector('.green');
    const boxYellow = document.querySelector('.yellow');

    if(num === 1){
        boxRed.id = 'red';

        coresSalvas.push('red');

    }else if(num === 2){
        boxBlue.id = 'blue';

        coresSalvas.push('blue');

    }else if(num === 3){
        boxGreen.id = 'green';

        coresSalvas.push('green');
                
    }else if(num === 4){
        boxYellow.id = 'yellow';

        coresSalvas.push('yellow');
    }

    setTimeout(function(){
        boxRed.id = '';
        boxBlue.id = '';
        boxGreen.id = '';
        boxYellow.id = '';
    },1000);
    
}
associandoNumACores(corRandomica());