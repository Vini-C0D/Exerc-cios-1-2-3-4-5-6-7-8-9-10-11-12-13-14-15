const botao = document.querySelector("#acao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Evento executado com sucesso!";
});
