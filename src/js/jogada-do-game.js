
////////////////////////////////
// Função principal que associa numero a cor e mostra a jogada da maquina em si.
function jogadaDaMaquina(){

    let geraNumRandomArray = corRandomica();
    let chamandoFuncComParametro = sequenciaDeCores(geraNumRandomArray);

    const botaoCorClicada = document.querySelector('.jogo');
    botaoCorClicada.addEventListener('click',corClicada);

    identificaFimDaSequenciaDoJogador();
}

//função que acende as cores na jogada da maquina
function acendendoCoresMaquina(num){    

    const boxRed = document.querySelector('.red');
    const boxBlue = document.querySelector('.blue');
    const boxGreen = document.querySelector('.green');
    const boxYellow = document.querySelector('.yellow');
    
        if(num === 1){
            boxRed.id = 'red';

        }else if(num === 2){
            boxBlue.id = 'blue';

        }else if(num === 3){
            boxGreen.id = 'green';
                    
        }else if(num === 4){
            boxYellow.id = 'yellow';
        }

        setTimeout(function(){
            boxRed.id = '';
            boxBlue.id = '';
            boxGreen.id = '';
            boxYellow.id = '';
        },600);  
}

//função que faz rodar todas as cores que estiverem no array na jogada da maquina
function sequenciaDeCores(arr){
    
    let delay = 400;
    
    for(let i = 0; i < arr.length; i++){

        let arrInF = arr[i];

        setTimeout(function(){
            
            acendendoCoresMaquina(arrInF)
        },delay); 
        
        delay += 800;        
    }
}