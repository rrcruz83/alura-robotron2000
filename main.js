//Guarda na constante controle, um array com todos os datasets [data-controle] que foram especificados no html
const controle = document.querySelectorAll("[data-controle]");
//console.log(controle);

//Toda vez que clicar ele traz no evento, dentro do target, está o dataset especificado no html com o seu valor
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        //console.log(evento.target.dataset);
        //console.log(evento.target.parentNode);
    })
}); 

//A função manipulaDados sempre vai receber o valor de uma operacao e o elemento pai do elemento clicado
//No elemento será identificado o dataset [data-controler] e a operação será comparada atraves de if
function manipulaDados(operacao, controle) {
    //console.log(controle, operacao);
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
};