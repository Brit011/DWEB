// 1) Recebe três números e retorna o maior deles
function maiorNumero(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// 2) Recebe três números e retorná-los em ordem crescente
function ordenarNumeros(a, b, c) {
    let lista = [a, b, c];
    return lista.sort(function(x, y) {
        return x - y;
    });
}

// 3) Recebe uma string, converte para minúsculas, tira espaços e vê se é palíndromo
function ehPalindromo(texto) {
    let limpo = texto.toLowerCase().replaceAll(" ", "");
    let invertido = limpo.split("").reverse().join("");
    
    if (limpo === invertido) {
        return "É palíndromo";
    } else {
        return "Não é palíndromo";
    }
}

// 4) Recebe duas palavras e verifica se a segunda é subconjunto da primeira
function verificarSub(palavraPrincipal, sub) {
    if (!palavraPrincipal || !sub || palavraPrincipal.trim() === "" || sub.trim() === "") {
        return "erro";
    }

    let p1 = palavraPrincipal.toLowerCase();
    let p2 = sub.toLowerCase();

    if (p1.includes(p2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5) Recebe uma data e devolve o dia da semana
function diaDaSemana(dataStr) {
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let partes = dataStr.split("-");
    let dataObj = new Date(partes[0], partes[1] - 1, partes[2]);
    
    return dias[dataObj.getDay()];
}


// --- Funções para ligar os inputs da tela com o script ---

function testarMaior() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    document.getElementById("res1").innerText = "Maior: " + maiorNumero(n1, n2, n3);
}

function testarOrdem() {
    let c1 = Number(document.getElementById("c1").value);
    let c2 = Number(document.getElementById("c2").value);
    let c3 = Number(document.getElementById("c3").value);
    document.getElementById("res2").innerText = "Ordem: " + ordenarNumeros(c1, c2, c3).join(", ");
}

function testarPalindromo() {
    let texto = document.getElementById("palavra").value;
    document.getElementById("res3").innerText = ehPalindromo(texto);
}

function testarSubconjunto() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    document.getElementById("res4").innerText = verificarSub(p1, p2);
}

function testarData() {
    let data = document.getElementById("dataInput").value;
    if (!data) {
        document.getElementById("res5").innerText = "Selecione uma data!";
        return;
    }
    document.getElementById("res5").innerText = "Dia da semana: " + diaDaSemana(data);
}