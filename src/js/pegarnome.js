function pegarNome(){
    const teste = document.getElementById('inputsubmit');
    console.log(teste.value);
    window.location.href='jogo.html';
}



const btn = document.getElementById('btnSubmit');
btn.addEventListener('click', pegarNome);