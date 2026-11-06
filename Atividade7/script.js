function jogar(escolhaUsuario) {
    // b. O computador faz uma escolha usando Math.random
    // Gerando um número aleatório entre 0 e 2 utilizando Math.floor e Math.random
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    // Mapeando o número aleatório para as opções do jogo
    if (numeroAleatorio === 0) {
        escolhaComputador = 'pedra';
    } else if (numeroAleatorio === 1) {
        escolhaComputador = 'papel';
    } else {
        escolhaComputador = 'tesoura';
    }

    // Elementos da interface HTML
    const userChoiceEl = document.getElementById('user-choice');
    const computerChoiceEl = document.getElementById('computer-choice');
    const winnerTextEl = document.getElementById('winner-text');
    const resultContainer = document.getElementById('result-container');

    // Dicionário com os símbolos atualizados
    const icones = {
        'pedra': '✊ Pedra',
        'papel': '📄 Papel',
        'tesoura': '✂️ Tesoura'
    };

    // Atualiza a tela com as escolhas feitas
    userChoiceEl.textContent = icones[escolhaUsuario];
    computerChoiceEl.textContent = icones[escolhaComputador];

    // Exibe o painel de resultado removendo a classe 'hidden'
    resultContainer.classList.remove('hidden');

    // c. Determinar o vencedor de acordo com as regras oficiais do jogo
    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
        winnerTextEl.className = 'empate';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra')
    ) {
        // Regras de vitória do usuário
        if (escolhaUsuario === 'pedra') {
            resultado = 'Você venceu! Pedra quebra tesoura.';
        } else if (escolhaUsuario === 'tesoura') {
            resultado = 'Você venceu! Tesoura corta papel.';
        } else {
            resultado = 'Você venceu! Papel cobre a pedra.';
        }
        winnerTextEl.className = 'vitoria';
    } else {
        // Regras de vitória do computador
        if (escolhaComputador === 'pedra') {
            resultado = 'Computador venceu! Pedra quebra tesoura.';
        } else if (escolhaComputador === 'tesoura') {
            resultado = 'Computador venceu! Tesoura corta papel.';
        } else {
            resultado = 'Computador venceu! Papel cobre a pedra.';
        }
        winnerTextEl.className = 'derrota';
    }

    winnerTextEl.textContent = resultado;
}