import {conectaAPI} from "./conectaAPI.js"// essa variável esta dentro de conectaAPI.js
import constroiCardes from "./mostrarVideos.js"

async function buscarVideo (evento){
    evento.preventDefault()
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa) // retorna um array

    const lista = document.querySelector("[data-lista]")
    lista.innerHTML = ""

    busca.forEach(elemento => lista.appendChild(constroiCardes(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeo com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")
const dadosDePesquisa = document.querySelector("[data-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))

//dadosDePesquisa.addEventListener("keydown", evento => evento.key === "Enter" ? buscarVideo(evento))
dadosDePesquisa.addEventListener("keydown", event => event.key === "Enter" ? buscarVideo(event) : console.log())
