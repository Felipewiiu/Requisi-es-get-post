

async function listaVideo(){
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida;
}
 //Quando não declarado p método para o fetch ele entende como GET

async function criaVideo (titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", // Post é outro metodo, serve pra enviar
        headers: {
            "Content-type" : "application/json" // especifica o tipo de arquivo que será enviado
        },
        body: JSON.stringify({// corpo da requisição --> stringfy transforma o objeto em string
            titulo : titulo,
            descricao: `${descricao} mil visualisações`,
            url: url,
            imagem: imagem
        })
    })

    if(!conexao.ok){ // erro que aparece no alert
        throw new Error ("Não foi possível enviar o video")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
    
}

async function buscaVideo (termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)// colocando o ponto ?q= é posível buscar termos na api
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida

}

export const conectaAPI = {
    listaVideo,
    criaVideo,
    buscaVideo
}

