const nomes = ["Ana", "Bruno", "Carla"];

const botao = document.querySelector("#mostrar");
const lista = document.querySelector("#lista");

function mostrarNomes() {
    lista.innerHTML = "";

    for (const nome of nomes) {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}

botao.addEventListener("click", mostrarNomes);
