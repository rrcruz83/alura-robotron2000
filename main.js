//Guarda na constante controle, um array com todos os datasets [data-controle] que foram especificados no html
const controle = document.querySelectorAll("[data-controle]");
//console.log(controle);

//Guarda na constante estatisticas, um array com todos os datasets [data-estatistica] que foram especificados no html
const estatisticas = document.querySelectorAll("[data-estatistica]")
//console.log(estatisticas);

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//Toda vez que clicar ele traz no evento, dentro do target, está o dataset especificado no html com o seu valor e envia para a sua determinada funcao
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        //console.log(evento.target.dataset);
        //console.log(evento.target.parentNode);
        atualizaEstatiticas(evento.target.dataset.peca);
        //console.log(evento.target.dataset.peca);
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

//A função atualizaEstatistica sempre vai receber o valor da peça que foi clicado
//Então ela irá percorrer o array de estatisticas e atualizar o textcontent do elemento
//, convertendo esse valor pra inteiro e somando com o valor recebido pelo dataset.estatistica
function atualizaEstatiticas (peca) {
    //console.log(estatisticas);
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        //console.log(elemento.textContent)
        //console.log(pecas[peca][elemento.dataset.estatistica]);
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }