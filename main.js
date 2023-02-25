const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const robo = document.querySelector(".robo")
const robos = [
    'img/robotronAmarelo.png', 
    'img/robotronAzul.png', 
    'img/robotronRosa.png', 
    'img/robotronBranco.png', 
    'img/robotronVermelho.png',
    'img/robotronPreto.png'
]
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

contador = 0;
robo.addEventListener("click", () => {
    robo.src = robos[contador]
    contador += 1;
    if (contador == robos.length) {
        contador = 0;
    }
})

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        const operacao = evento.target.dataset.controle
        manipulaDados(operacao, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, operacao)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if (parseInt(peca.value) == 0 && operacao === "-"){
        peca.value = peca.value 
    } else if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas (peca, operacao) {
    estatisticas.forEach((elemento) => {
        if (parseInt(elemento.textContent) == 0 && operacao === "-"){
            elemento.textContent = elemento.textContent
        } else if (operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    })
}