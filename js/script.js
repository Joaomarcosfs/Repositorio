let historico = [];

function rolarDado() {
    const dado = document.getElementById('dado');
    const resultado = document.getElementById('resultado');

    // Animação de rolagem
    dado.classList.add('rolando');

    // Simula tempo de rolagem
    setTimeout(() => {
        const numero = Math.floor(Math.random() * 20) + 1;

        resultado.textContent = numero;

        // Remove animação
        dado.classList.remove('rolando');

        // Adiciona ao histórico
        adicionarAoHistorico(numero);

    }, 800);
}

function adicionarAoHistorico(numero) {
    historico.unshift(numero);

    // Mantém apenas os últimos 10
    if (historico.length > 10) historico.pop();

    const container = document.getElementById('historico');
    container.innerHTML = '';

    historico.forEach(num => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `🎲 Rolou: <strong>${num}</strong>`;
        container.appendChild(div);
    });
}

function limpar() {
    document.getElementById('resultado').textContent = '?';
    historico = [];
    document.getElementById('historico').innerHTML = '';
}

// Atalho de teclado: pressione ESPAÇO para rolar
document.addEventListener('keydown', function (e) {
    if (e.key === " ") {
        e.preventDefault();
        rolarDado();
    }
});

// Mensagem no console
console.log('%cD20 RPG carregado! Pressione ESPAÇO para rolar o dado ⚔️', 'color: #ffc107; font-family: monospace;');