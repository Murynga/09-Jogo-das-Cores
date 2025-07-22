

/* Anotações

- é bom definir o botão de jogar pra começar uma função chamada jogar() pra organização,
  o mesmo pra placar();
- comentar o código, se der tempo;
- 

*/

let jogador = "";
let quadrado1 = document.querySelector(".quadrado1");
let quadrado2 = document.querySelector(".quadrado2");
let quadrado3 = document.querySelector(".quadrado3");
let quadrado4 = document.querySelector(".quadrado4");
let quadrado5 = document.querySelector(".quadrado5");
let quadrado6 = document.querySelector(".quadrado6");
let quadrado7 = document.querySelector(".quadrado7");
let quadrado8 = document.querySelector(".quadrado8");
let quadrado9 = document.querySelector(".quadrado9");




/** Tentativa de estruturação do jogo:
 * jogador clica em jogar e digita o nome
 * pontuação vira 0
 * se escolhe qual a cor a ser clicada (corAtual)
 * randomiza a cor de todos os quadrados, e as atribui aos mesmos
 * 
 * 
 */



function jogar() {
    let pontuacao = 0;
    let pontuacaoEl = document.querySelector(".pontuacao");
    
    /*jogador = window.prompt("Qual é o seu nome?");
    
    if (jogador == null || jogador == "")
        return;
*/
    pontuacaoEl.innerHTML = "<p><strong>Pontuação: " + pontuacao + "</strong></p>";

    let corAtual = Math.round(Math.random() * 5); // rodar isso no começo da rodada
    window.alert(corAtual);

    switch(corAtual) { // talvez jogar isso pra aleatorizaCor() 
        case 0:
            quadrado1.style.backgroundImage = "linear-gradient(to bottom right, green, rgb(214, 214, 214))";
            break;

        case 1:
            quadrado2.style.backgroundImage = "linear-gradient(to bottom right, blue, rgb(214, 214, 214))";
            break;

        case 2:
            quadrado3.style.backgroundImage = "linear-gradient(to bottom right, red, rgb(214, 214, 214))";
            break;

        case 3:
            quadrado4.style.backgroundImage = "linear-gradient(to bottom right, magenta, rgb(214, 214, 214))";
            break;

        case 4:
            quadrado5.style.backgroundImage = "linear-gradient(to bottom right, yellow, rgb(214, 214, 214))";
            break;
    }

    
}

function placar() {
    window.alert("Carlos\n\n 1º Lugar\n\"O mais brabo\""); // Não vai dar certo fazer isso :/
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

// Função pra checar se o usuário clicou no quadrado certo, 
// somando ou debitando em sua pontuação total
function checaJogada(pontuacao) {


    return pontuacao;
}

function aleatorizaCor() {
    
}