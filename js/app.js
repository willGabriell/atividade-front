dados.forEach(function(atleta){
    console.log("titulo: " + atleta.titulo);
    console.log("descrição: " + atleta.descricao);
    console.log("link: " + atleta.link);
    console.log("--------------------");
})

function pesquisar() {
    let section = document.querySelector("#resultados-pesquisa");
    let campoPesquisa = document.querySelector("#campo-pesquisa").value;
    console.log(campoPesquisa);
    
    if(!campoPesquisa) {
        section.innerHTML = "<p>Campo vazio</p>"
    }

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrica-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }

        if (!resultados) {
            resultados = "<p>nada encontrado</p>"
        }

        section.innerHTML = resultados;
    }
}