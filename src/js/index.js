/*
    O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marca o botao como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista marcar o botão como selecionado:
        - passo 1 - pegar os botões no Js pra oder verificar quando o usuario clicar em cima de um deles
        - passo 2 adicionar a classe "selecionado" no botão que o usuario clicou
        - passo 3 - verificar se já existe um botão selecionado se sim, devemos remover a seleção dele
    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem:
        - passo 1 - pegar os personagens do JS pra poder mostrar ou esconder ele
        - passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
        - passo 3 - verificar se já exista um personagem selecionado, se sim devemos remover a seleção dele
        
*/


/*
  OBJETIVO 1 - quando clicar no botão do personagem na lista marcar o botão como selecionado:
    - passo 1 - pegar os botões no Js pra oder verificar quando o usuario clicar em cima de um deles  
*/
const botoes = document.querySelectorAll(".botao");

//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem:
// - passo 1 - pegar os personagens do JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {

        // - passo 3 - verificar se já existe um botão selecionado se sim, devemos remover a seleção dele
        desselecionarBotao();

        //- passo 2 adicionar a classe "selecionado" no botão que o usuario clicou
        botao.classList.add("selecionado");

        //OB2 - passo 3 - verificar se já exista um personagem selecionado, se sim devemos remover a seleção dele

        desselecionarPersonagem();

        // OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem:
        // - passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou

        personagens[indice].classList.add("selecionado");

        // verificar o indice:
        // console.log(indice);
        // console.log(personagens[indice]);
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

// extraimos um função com o botão direito, refatorar e depois função global
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
