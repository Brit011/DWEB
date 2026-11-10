let dados = [];

document.getElementById('formPesquisa').addEventListener('submit', function(e) {
    e.preventDefault();

    if (dados.length >= 45) {
        alert("Limite de 45 atingido!");
        return;
    }

    let idade = parseInt(document.getElementById('idade').value);
    let sexo = document.getElementById('sexo').value;
    let opiniao = parseInt(document.getElementById('opiniao').value);

    dados.push({ idade, sexo, opiniao });
    document.getElementById('qtd').textContent = dados.length;
    this.reset();

    calcular();
});

function calcular() {
    let total = dados.length;
    if (total === 0) return;

    let somaIdade = 0;
    let velha = dados[0].idade;
    let nova = dados[0].idade;
    let pessimo = 0;
    let otimoBom = 0;
    let fem = 0, masc = 0, outros = 0;

    for (let i = 0; i < total; i++) {
        let p = dados[i];
        somaIdade += p.idade;

        if (p.idade > velha) velha = p.idade;
        if (p.idade < nova) nova = p.idade;
        if (p.opiniao === 1) pessimo++;
        if (p.opiniao >= 3) otimoBom++;

        if (p.sexo === 'feminino') fem++;
        else if (p.sexo === 'masculino') masc++;
        else if (p.sexo === 'outros') outros++;
    }

    document.getElementById('rMedia').textContent = (somaIdade / total).toFixed(1);
    document.getElementById('rVelha').textContent = velha;
    document.getElementById('rNova').textContent = nova;
    document.getElementById('rPessimo').textContent = pessimo;
    document.getElementById('rOtimoBom').textContent = ((otimoBom / total) * 100).toFixed(1) + '%';
    document.getElementById('rFem').textContent = fem;
    document.getElementById('rMasc').textContent = masc;
    document.getElementById('rOutros').textContent = outros;
}