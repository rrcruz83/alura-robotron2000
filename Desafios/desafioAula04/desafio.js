const botao = document.querySelector("[data-botao]")
const lista = document.querySelector(".lista")

botao.addEventListener("click", () => {

    lista.classList.toggle("lista-ativa")
    console.log(lista)
})


