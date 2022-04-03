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

    const spanComecarAJogar = document.createElement('span');
    spanComecarAJogar.setAttribute('class','startNoGame');
    spanComecarAJogar.setAttribute('id','');
    spanComecarAJogar.innerText = `PRESS\nSTART`;

    boxInfos.appendChild(spanComecarAJogar);

    main.appendChild(boxRed);
    main.appendChild(boxBlue);
    main.appendChild(boxGreen);
    main.appendChild(boxYellow);
    main.appendChild(boxInfos);

}
criaTabuleiroDoJogo();


