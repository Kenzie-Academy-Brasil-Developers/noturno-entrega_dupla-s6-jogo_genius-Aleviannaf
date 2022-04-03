const home = document.getElementById('home');

function telaHome(){
    const h1= document.createElement("h1");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const form = document.createElement("div");
    
    h1.innerText = "Genius";
    input.placeholder = "Digite seu nome";
    input.required = true;
    input.id = "inputsubmit"
    button.id = "btnSubmit";
    button.innerText = "Entrar";
    button.type= "submit";

    
    
    form.appendChild(input);
    form.appendChild(button);
    form.classList.add('wrap');

    home.appendChild(h1);
    home.appendChild(form);
    
    home.classList.add('form');
    
    
}

telaHome();