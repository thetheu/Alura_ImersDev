function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")) {
       listarFilmesNaTela(filmeFavorito);
    }else {
        console.error("Endereçio de filme Inválido");
    }
    document.getElementById("filme").value = "";
};

function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

// innerHTML = colocar algo dentro de uma tag HTML. Por exemplo uma lista