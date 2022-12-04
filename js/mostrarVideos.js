import { conectaAPI } from "./conectaAPI.js"


const lista = document.querySelector("[data-lista]")

export default function constroiCardes (titulo, descricao, url, imagem){
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        </div>
    `

    return video
}

async function listaVideo (){
    try{//tratamento de erro
        const listaAPI = await conectaAPI.listaVideo();// retorna um array de elementos
        listaAPI.forEach(elemento => lista.appendChild(
            constroiCardes(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    } catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Poxa estamos com problemas mas logo retornamos!</h2>`
    }
}

listaVideo()