const corAtual = document.getElementById("cor-atual");
const jogador = document.getElementById("jogador");
const pontuacao = document.getElementById("pontuacao");
const tempoRestante = document.getElementById("tempo-restante"); 
const botaoJogar = document.getElementById("botao-jogar"); 
const quadrado1 = document.getElementById("quadrado1");
const quadrado2 = document.getElementById("quadrado2");
const quadrado3 = document.getElementById("quadrado3");
const quadrado4 = document.getElementById("quadrado4");
const quadrado5 = document.getElementById("quadrado5");
const quadrado6 = document.getElementById("quadrado6");
const quadrado7 = document.getElementById("quadrado7");
const quadrado8 = document.getElementById("quadrado8");
const quadrado9 = document.getElementById("quadrado9");
const quadrados = [quadrado1, quadrado2, quadrado3, 
                quadrado4, quadrado5, quadrado6, 
                quadrado7, quadrado8, quadrado9];
let emJogo = true;
let resposta = "";
let jogadorNome = null;
let pontos = 0;
let tempoTotal = 15;
let intervalo;


function jogar() {
    jogadorNome = window.prompt("Digite seu nome: ");
    if (jogadorNome == null || jogadorNome == "")
        return;

    emJogo = true;
    jogador.innerHTML = jogadorNome;
    pontos = 0;
    pontuacao.innerHTML = pontos;
    botaoJogar.disabled = true;
    
    
    
    iniciaTempo();
    aleatorizaCores();

    // checa se acertou ou errou, altera a pontuação e aleatoriza de novo
    for(let quadrado of quadrados) {
        quadrado.addEventListener("click", function() {
            if (emJogo == false)
                return;

            if (resposta === quadrado.style.backgroundColor) {
                pontos += 10;
                pontuacao.innerHTML = pontos;
                aleatorizaCores();

            } else {
                pontos -= 5;
                pontuacao.innerHTML = pontos;
                aleatorizaCores();
            }
        })
    }


}

function aleatorizaCores() {
        
    let cores = ["green", "red", "blue", 
                "magenta", "yellow", "purple", 
                "cyan", "orange", "black"];
    let possivelResposta = [];
    let quadradoAtual;

    // aleatoriza as cores
    cores.sort(function(a, b) {return 0.5 - Math.random()})

    

    // itera pelos quadrados, atribuindo cores a eles e salvando essas cores no vetor de resposta
    for (let i = 1; i < 10; i++) {
        quadradoAtual = document.getElementById("quadrado" + i);
        corAleatoria = Math.round(Math.random() * 8);
        quadradoAtual.style.backgroundColor = cores[corAleatoria];
        possivelResposta.push(cores[corAleatoria]);

    }

    resposta = possivelResposta[Math.round(Math.random() * 8)];

    // altera a cor atual no HTML baseado na resposta
    switch (resposta) {
        case "green":
            corAtual.innerHTML = "Verde";
            corAtual.style.color = "green";
            break;

        case "red":
            corAtual.innerHTML = "Vermelho";
            corAtual.style.color = "red";
            break;

        case "blue":
            corAtual.innerHTML = "Azul";
            corAtual.style.color = "blue";
            break;

        case "magenta":
            corAtual.innerHTML = "Magenta";
            corAtual.style.color = "magenta";
            break;

        case "yellow":
            corAtual.innerHTML = "Amarelo";
            corAtual.style.color = "yellow";
            break;

        case "purple":
            corAtual.innerHTML = "Roxo";
            corAtual.style.color = "purple";
            break;

        case "cyan":
            corAtual.innerHTML = "Ciano";
            corAtual.style.color = "cyan";
            break;

        case "orange":
            corAtual.innerHTML = "Laranja";
            corAtual.style.color = "orange";
            break;

        case "black":
            corAtual.innerHTML = "Preto";
            corAtual.style.color = "black";
            break;      
    }
}

function iniciaTempo() {
    tempoTotal = 15;
    tempoRestante.innerHTML = `${tempoTotal}s`;
    intervalo = setInterval(atualizaTempo, 1000);
}

function atualizaTempo() {
    // faz o temporizador funcionar
    tempoTotal--;
    tempoRestante.innerHTML = `${tempoTotal}s`;

    if (tempoTotal <= 0) {
        clearInterval(intervalo);
        window.alert(`Fim de jogo!\n\n` +
                    `Jogador: ${jogadorNome}\n` +
                    `pontuação: ${pontos}`);
        atualizaPlacar(jogadorNome, pontos);
        resetaJogo();
        
    }
}

// volta o jogo para o padrão ao acabar a partida atual
function resetaJogo() {
    for(let quadrado of quadrados) {
        quadrado.style.backgroundColor = "grey";
    }
    tempoRestante.innerHTML = "0s";
    botaoJogar.disabled = false;
    emJogo = false;
    jogador.innerHTML = "---";
    pontuacao.innerHTML = "---";
    tempoRestante.innerHTML = "---";
    corAtual.innerHTML = "---";
    corAtual.style.color = "black";

}

function atualizaPlacar(nome, pontos) {
    let jogadorAtual = {
        nome: nome,
        pontos: pontos
    }
    let todoPlacar = localStorage.getItem("placar");
    let placar;

    if (todoPlacar) {
        placar = JSON.parse(todoPlacar);
    } else {
        placar = [];
    }

    placar.push(jogadorAtual);
    placar.sort((a, b) => b.pontos - a.pontos);

    let novoPlacar = JSON.stringify(placar, null, 2);

    localStorage.setItem("placar", novoPlacar);
}

function mostraPlacar() {
    let todoPlacar = localStorage.getItem("placar");
    let placar;

    if (todoPlacar) {
        placar = JSON.parse(todoPlacar);
    } else {
        window.confirm("Ainda não há entradas no placar.\nSeja o primeiro!");
        return;
    }

    let alertaPlacar = "Placar de Líderes:\n\n";
    placar.forEach((jogadorAtual, posicao) => {
    
            alertaPlacar +=`${posicao + 1}º Lugar:\n\n` +
                        `Nome: ${jogadorAtual.nome};\n` +
                        `Pontuação: ${jogadorAtual.pontos}\n\n`;
        });

    window.alert(alertaPlacar);
    
}

//fazer a logo girar ao clicar
function rodar() {
    let logo = document.getElementById("logo");

    //aciona a classe de rotação
    logo.classList.add("rotacao");

    //remove a classe quando para de rodar
    logo.addEventListener("animationend", () => {
        logo.classList.remove("rotacao");
    }, {once: true}); // pra rodar o eventListener só uma vez
}