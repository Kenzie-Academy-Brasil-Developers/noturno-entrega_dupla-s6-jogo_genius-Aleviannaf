
//cria numero pra associar a cor
function corRandomica(){
    
    return Math.trunc(Math.random() * 4) + 1;
}

//função para limpar ambos os arrays.
function limpaArray(array){

    for(let i = array.length; i >= 0; i--){
        
        array.pop();
    }
}