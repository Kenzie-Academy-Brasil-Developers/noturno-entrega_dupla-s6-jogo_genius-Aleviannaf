
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