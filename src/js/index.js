/*

    OBJETIVO-quando clicarmos na aba temos que mostrar
    o conteúdo da aba que foi clicado pelo usuário e
    esconder o conteúdo da aba anterior

    -passoa 1 - dar um jeito de pegar os elementos 
    que reoresentam as abas no HTML

    -passo 2 - dar un jeito de indentificar o clique
    no elemento da aba

    -passso 3 - quando o usuário clicar,desmarcar a aba selelcionada

    -passoa 4 - marcar a aba clicada como selecionado

    -passo 5 - esconder o conteúdo anterior

    -passo 6 - mostrar o conteúdo da aba selecionada

*/

    // passoa1 1 - dar um jeito de pegar os elementos que reoresentam as abas no HTML
    const abas = document.querySelectorAll(".aba");
    abas.forEach(aba => {  
    // passo 2 - dar un jeito de indentificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        mostrarinformacoesDaAba(aba)


    });
});

function selecionarAba(aba) {
// passso 3 - quando o usuário clicar,desmarcar a aba selelcionada
const abaSelecionada = document.querySelector(".aba.selecionado");  
abaSelecionada.classList.remove("selecionado");

// passoa 4 - marcar a aba clicada como selecionado
aba.classList.add("selecionado");
}

function mostrarinformacoesDaAba(aba) {

     // passo 5 - esconder o conteúdo anterior
     const informacaoSelecionada = document.querySelector
     (".informacao.selecionado");
     informacaoSelecionada.classList.remove("selecionado");

     // passo 6 - mostrar o conteúdo da aba selecionada
     const idDoElementoDeInformacoesDaAba =
     `informacao-${aba.id}`

     const informacaoASerMostrada = document.
     getElementById(idDoElementoDeInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionado")
}