alert("Desenvolvido por Pedro H.A.C.X");
/*
o que precisamos fazer? - quando clicar no botão do personagem  na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente 

Objetivo 1 - quando clicar no personagem da lista, marcar o botão como selecionado
passo 1 - pegar os botões no js para poder verificar quando o usuario clicar em cima de um deles 
passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
passo 3 - verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele

Objetivo 2 - quando  clicar no botão do personagem mostrar as informações do personagem
passo 1 - pegar os personagems no js para poder mostrar ou esconder ele
passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
*/

//Objetivo 1 - quando clicar no personagem da lista, marcar o botão como selecionado
//passo 1 - pegar os botões no js para poder verificar quando o usuario clicar em cima de um deles 
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
console.log(botoes);
//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
                //passo 3 - verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado"); 

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
       personagens[indice].classList.add("selecionado");
    })
}) 

//Objetivo 2 - quando  clicar no botão do personagem mostrar as informações do personagem
