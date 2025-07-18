

/* Anotações

- é bom definir o botão de jogar pra começar uma função chamada jogar() pra organização,
  o mesmo pra placar();
- comentar o código, se der tempo;
- 

*/


function jogar() {
    window.alert("tu é bem legal");
}

function placar() {

}

//fazer a logo girar ao clicar
function rodar() {
    let logo = document.querySelector(".logo");

    //aiciona a classe de rotação
    logo.classList.add("rotacao");

    //remove a classe quando para de rodar
    logo.addEventListener("animationend", () => {
        logo.classList.remove("rotacao");
    }, {once: true}); // pra rodar o eventListener só uma vez
}