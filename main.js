const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const contador = document.querySelector("#contador");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
    })
}); 

function manipulaDados(operacao) {
    if (operacao == "-") {
        contador.value = parseInt(contador.value) - 1;
    } else {
        contador.value = parseInt(contador.value) + 1;
    }
};