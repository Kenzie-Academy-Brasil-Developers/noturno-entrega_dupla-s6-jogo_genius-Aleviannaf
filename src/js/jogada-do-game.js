
//array para salvar as cores /jogo
const coresSalvas = [];

////////////////////////////////
// Função que assosia numero a cor.
function jogadaDaMaquina(){

    let geraNumRandomArray = corRandomica();
    let chamandoFuncComParametro = associandoNumACores(geraNumRandomArray);
}
function associandoNumACores(num){    

    const boxRed = document.querySelector('.red');
    const boxBlue = document.querySelector('.blue');
    const boxGreen = document.querySelector('.green');
    const boxYellow = document.querySelector('.yellow');    

    for(let i = 0; i < num.length; i++){
        
        /*setTimeout(function(){
            
        },400)*/

        let numF = num[i];      

        if(numF === 1){
            boxRed.id = 'red';

            coresSalvas.push('red');

        }else if(numF === 2){
            boxBlue.id = 'blue';

            coresSalvas.push('blue');

        }else if(numF === 3){
            boxGreen.id = 'green';

            coresSalvas.push('green');
                    
        }else if(numF === 4){
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
    
    
}