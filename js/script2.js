// Gera o número secreto
let numeroSecreto = Math.floor(Math.random() * 11); // 0 a 10
let tentativas = 2;

function fazerTentativa() {
    const input = document.getElementById("palpite");
    const mensagem = document.getElementById("mensagem");
    const spanTentativas = document.getElementById("tentativas");

    const palpite = parseInt(input.value);

    // Validação
    if (isNaN(palpite) || palpite < 0 || palpite > 10) {
        mensagem.style.color = "#ff6666";
        mensagem.textContent = "❌ Digite um número entre 0 e 10!";
        return;
    }

    tentativas--;
    spanTentativas.textContent = tentativas;

    if (palpite === numeroSecreto) {
        mensagem.style.color = "#00ff88";
        mensagem.innerHTML = `🎉 Parabéns! Você acertou!<br>O número era <strong>${numeroSecreto}</strong>`;
        document.querySelector("button").disabled = true;
    }
    else if (tentativas === 0) {
        mensagem.style.color = "#ff6666";
        mensagem.innerHTML = `😢 Game Over!<br>O número era <strong>${numeroSecreto}</strong>`;
        document.querySelector("button").disabled = true;
    }
    else {
        mensagem.style.color = "#ffff66";
        if (palpite < numeroSecreto) {
            mensagem.textContent = `📈 O número é maior que ${palpite}`;
        } else {
            mensagem.textContent = `📉 O número é menor que ${palpite}`;
        }
    }

    // Limpa o input após cada tentativa
    input.value = "";
    input.focus();
}

// Permite pressionar Enter para enviar o palpite
document.getElementById("palpite").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        fazerTentativa();
    }
});