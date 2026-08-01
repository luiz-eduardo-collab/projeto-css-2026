// 1. Seleciona o botão e a área de texto do HTML usando o JavaScript
const botaoGerar = document.querySelector("button");
const areaTexto = document.querySelector("textarea");

// 2. Cria a função que será executada quando o botão for clicado
function mapearCliqueDoBotao() {
    // Pega o texto que o usuário digitou dentro do textarea
    const textoDigitado = areaTexto.value;

    // Se o usuário não digitou nada, avisa para ele digitar
    if (textoDigitado.trim() === "") {
        alert("Por favor, descreva o que você imagina antes de gerar!");
        return;
    }

    // Alerta de teste para provar que o botão funcionou
    alert("O botão funcionou! Você digitou: " + textoDigitado);
}

// 3. Diz para o botão ficar esperando (escutando) o clique do usuário
botaoGerar.addEventListener("click", mapearCliqueDoBotao);
