const robotron = document.querySelector("#robotron")
const box = document.querySelector(".box")

robotron.addEventListener("click", function() {
    console.log("Isso é uma função anônima")
})

box.addEventListener("click", (nome) => {
    console.log("Isso é um arrow function / Função de seta")
})

function BemVindo (nome) {
    console.log("Olá, " + nome + "! Isso é uma função declarada")
}

BemVindo("Robson");