
//array para salvar as cores /jogo
const coresSalvas = [];

////////////////////////////////
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
    },600);
    
}