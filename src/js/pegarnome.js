function pegarNome(){
    const nome = document.getElementById('inputsubmit');
    window.location.href=`jogo.html?${nome.value}`;
}



const btn = document.getElementById('btnSubmit');
btn.addEventListener('click', pegarNome);