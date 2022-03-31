const home = document.getElementById('home');

function telaHome(){
    const h1= document.createElement("h1");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const form = document.createElement("form");
    
    h1.innerText = "Genius";
    input.placeholder = "Digite seu nome";
    input.required = true;
    button.id = "btnSubmit";
    button.innerText = "Entrar";
    button.type= "submit";
    

    form.action= "jogo.html";
    form.appendChild(input);
    form.appendChild(button);

    home.appendChild(h1);
    home.appendChild(form);
    
    home.classList.add('form');
    

}

telaHome();