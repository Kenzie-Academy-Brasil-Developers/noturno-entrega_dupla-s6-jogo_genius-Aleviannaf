const home = document.getElementById('home');

function telaHome(){
    const h1= document.createElement("h1");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const form = document.createElement("form");
    
    h1.innerText = "Genius";
    input.placeholder = "Digite seu nome"
    button.id = "btnSubmit";
    button.innerText = "Entrar";

    home.appendChild(h1);
    form.appendChild(input);
    form.appendChild(button);
    home.appendChild(form);
    
    home.classList.add('form');
    

}

telaHome();