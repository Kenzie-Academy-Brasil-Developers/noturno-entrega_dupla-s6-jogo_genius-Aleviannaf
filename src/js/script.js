//Função que cria o tabuleiro do Genius.
function criaTabuleiroDoJogo(){

    const main = document.getElementById('jogo');

    const boxRed = document.createElement('div');
    boxRed.setAttribute('class','box red');

    const boxBlue = document.createElement('div');
    boxBlue.setAttribute('class', 'box blue');

    const boxGreen = document.createElement('div');
    boxGreen.setAttribute('class', 'box green');

    const boxYellow = document.createElement('div');
    boxYellow.setAttribute('class', 'box yellow');

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
