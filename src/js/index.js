// quando clicar no btão da pessoa na lista, marcar como selecionado.
const botoes = document.querySelectorAll('.botao');

//quando clicalr no botão do personagem mostrar informações do personagem
const pessoa = document.querySelectorAll(".pessoa");


botoes.forEach((botao, indice)=>{
    botao.addEventListener("click", () => {
        
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado"); //removendo a classe selecionada ao botão anterior
        
        botao.classList.add("selecionado"); //adicionando a classe selecionada ao botão clicado
        
        const pessoaSelecionada = document.querySelector(".pessoa.selecionada");
        pessoaSelecionada.classList.remove('selecionada');

        pessoa[indice].classList.add("selecionada");
        
    });
});


