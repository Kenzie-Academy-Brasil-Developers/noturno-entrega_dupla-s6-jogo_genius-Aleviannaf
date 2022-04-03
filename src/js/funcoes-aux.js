
//cria numero pra associar a cor
const armazenaJogadaEmNumber = [];

function corRandomica(){
    
    armazenaJogadaEmNumber.push(Math.trunc(Math.random() * 4) + 1);
    return armazenaJogadaEmNumber;
}


//função para limpar ambos os arrays.
function limpaArray(array){

    for(let i = array.length; i >= 0; i--){
        
        array.pop();
    }
}


////////Função que compara jogadas
function comparaJogadas(arr1,arr2){

    const jogoMaquina = deNumeroParaCor(arr1);
    
    let stringArr1 = jogoMaquina.toString();
    let stringArr2 = arr2.toString();

    if(armazenaJogadaEmNumber.length>=20){
        mensagemParabens();
    }else{

    if(stringArr1 === stringArr2){
        
        console.log("acertou");
        mensagemDeAcerto();
    }  else{
        mensagemDeErro();
    }
    limpaArray(jogadaSalva);
    limpaArray(jogoMaquina);
    }
}


////converte num. em stringCores
function deNumeroParaCor(arr){

    const arrayComStrings = [];

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === 1){
            arrayComStrings.push('red');
        }else if(arr[i] === 2){
            arrayComStrings.push('blue');
        }else if(arr[i] === 3){
            arrayComStrings.push('green');
        }else if(arr[i] === 4){
            arrayComStrings.push('yellow');
        }
    }
    return arrayComStrings;
}

///// função para identificar se ja pode ser feita a atualização
let timerJogada = 4000;

function identificaFimDaSequenciaDoJogador(){    

    setTimeout(function(){

        comparaJogadas(armazenaJogadaEmNumber,jogadaSalva)
    },timerJogada);
    timerJogada += 1500;
}
