function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    if(!campoPesquisa){
        section.innerHTML = `
       <div class="item-resultado">
         <h2>nada foi encontrado</h2>
         <p> Você precisa digitar algo para iniciar a pesquisa </p>
         </div>
       
       `
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase( )

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao ="";
    let tags = "";
;
    // Itera sobre cada dado da pesquisa
    for(let dado of dados){
        titulo= dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
         
        // se titulo includes campoPesquisa
          if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      
        // Cria um novo elemento div para cada resultado 
        resultados += `
        <div class="item-resultado"> 
            <h2> ${dado.titulo} </h2>
            <p class="descricao-meta">${dado.descricao} </p>
            <a href=${dado.linksite} target="_blank"> Site Oficial </a> <br>        
            <a href=${dado.linklinkedin} target="_blank">Linkedin </a>
        </div>
    `;
     }
    }
    if (!resultados) {
        resultados =`<div class="item-resultado">
         <h2>Nada foi encontrado</h2>
         <p>Empresa não se encontra em nosso banco ou não é uma empresa brasileira</p> 
         </div>
         `
}
    // Insere os resultados gerados na seção HTML
    section.innerHTML = resultados;
}
