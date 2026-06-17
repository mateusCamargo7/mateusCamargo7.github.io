const btnModo = document.getElementById("modoEscuro");

if(btnModo){

    btnModo.addEventListener("click", () => {

        document.body.classList.toggle("modoEscuro");

    });

}

const btnMais = document.getElementById("AumentarFonte");
const btnMenos = document.getElementById("DiminuirFonte");

let tamanhoFonte = 16;

if(btnMais && btnMenos){

    btnMais.addEventListener("click", () => {

    if(tamanhoFonte < 30){

        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";

    }

    });

    btnMenos.addEventListener("click", () => {

        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";

    });

}

const formulario = document.getElementById("formularioContato");
const mensagem = document.getElementById("mensagemFormulario");

if(formulario){

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if(nome.trim() === "" || email.trim() === ""){

            mensagem.textContent = "Por favor, preencha todos os campos.";
            mensagem.style.color = "red";

        }
        else{

            mensagem.textContent = "Formulário enviado com sucesso!";
            mensagem.style.color = "green";

            formulario.reset();

        }

    });

}
