let livros = [];
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivroDaAPI()


async function getBuscarLivroDaAPI () {
    const res = await fetch (endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}



