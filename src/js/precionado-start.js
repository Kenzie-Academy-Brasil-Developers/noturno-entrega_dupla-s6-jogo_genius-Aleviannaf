
//Função que escuta o click no start
function clickStart(event){

    const botaoStart = document.querySelector('.startNoGame');
    const click = event.target.classList[0];

    if(click === 'startNoGame'){
        botaoStart.id = 'esconderStart';
    }
    
}
const chamarFuncaoStart = document.querySelector('.infos');
chamarFuncaoStart.addEventListener('click',clickStart);