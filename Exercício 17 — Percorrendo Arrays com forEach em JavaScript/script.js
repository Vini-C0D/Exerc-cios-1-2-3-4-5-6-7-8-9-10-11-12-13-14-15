const tecnologias = ['HTML', 'CSS', 'JavaScript', 'Git'];
const lista = document.querySelector('#tecnologias');
const botao = document.querySelector('#carregar');

botao.addEventListener('click', () => {
    lista.innerHTML = '';
    tecnologias.forEach((tecnologia, indice) => {
        const item = document.createElement('li');
        item.textContent = `${indice + 1} - ${tecnologia}`;
        lista.appendChild(item);
    });
});