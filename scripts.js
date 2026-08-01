// 1. Seleciona os elementos do HTML
const botaoGerar = document.querySelector("button");
const areaTexto = document.querySelector("textarea");
const corpoDaPagina = document.body; // Seleciona o fundo do site

// Dicionário simples para traduzir cores comuns digitadas em português
const coresTraduzidas = {
    "azul": "blue",
    "vermelho": "red",
    "verde": "green",
    "amarelo": "yellow",
    "roxo": "purple",
    "rosa": "pink",
    "laranja": "orange",
    "preto": "black",
    "branco": "white",
    "cinza": "gray"
};

function mudarCorDaPagina() {
    // Pega o texto digitado, transforma em letras minúsculas e remove espaços vazios
    let textoDigitado = areaTexto.value.toLowerCase().trim();

    if (textoDigitado === "") {
        alert("Por favor, digite o nome de uma cor!");
        return;
    }

    // Se o usuário digitou em português, traduz para o inglês. Se não, usa o que ele digitou.
    let corFinal = coresTraduzidas[textoDigitado] || textoDigitado;

    // Altera a cor de fundo do body do CSS para a cor escolhida
    corpoDaPagina.style.background = corFinal;
}

// Escuta o clique do botão para rodar a função
botaoGerar.addEventListener("click", mudarCorDaPagina);
