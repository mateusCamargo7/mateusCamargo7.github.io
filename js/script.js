const botaoModoEscuro = document.getElementById("modoEscuro");

const temaSalvo = localStorage.getItem("preferencia-tema");

if (temaSalvo === "escuro") {

    document.body.classList.add("modoEscuro");

}

if (botaoModoEscuro) {

    botaoModoEscuro.addEventListener("click", () => {

        document.body.classList.toggle("modoEscuro");

        if (document.body.classList.contains("modoEscuro")) {

            localStorage.setItem("preferencia-tema", "escuro");

        }
        else {

            localStorage.setItem("preferencia-tema", "claro");

        }

    });

}

const botaoAumentar = document.getElementById("AumentarFonte");
const botaoDiminuir = document.getElementById("DiminuirFonte");

let tamanhoFonte = 16;

if (botaoAumentar && botaoDiminuir) {

    botaoAumentar.addEventListener("click", () => {

        if (tamanhoFonte < 30) {

            tamanhoFonte += 2;
            document.body.style.fontSize = tamanhoFonte + "px";

        }

    });

    botaoDiminuir.addEventListener("click", () => {

        if (tamanhoFonte > 12) {

            tamanhoFonte -= 2;
            document.body.style.fontSize = tamanhoFonte + "px";

        }

    });

}

const formularioContato = document.getElementById("formularioContato");
const mensagemFormulario = document.getElementById("mensagemFormulario");

if (formularioContato) {

    formularioContato.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome.trim() === "" ||email.trim() === "" ||mensagem.value.trim() === "") {

            mensagemFormulario.textContent = "Por favor, preencha todos os campos.";
            mensagemFormulario.style.color = "red";

        }
        else {

            mensagemFormulario.textContent = "Formulário enviado com sucesso!";
            mensagemFormulario.style.color = "green";

            formularioContato.reset();

        }

    });

}