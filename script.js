// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

const texto = document.querySelector('.caixa-texto');

const resultado = document.querySelector('.parte-II');

function encriptar() {
    const text_encriptado = codificar(texto.value);
    resultado.innerHTML = ` <div class="parte-II_resultado">${text_encriptado}</div><button class="copiar parte-II_resultado_button" onclick = "copiar()">Copiar</button> `;

    texto.value = '';
}

function codificar(texto_codificar) {
    matriztext = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    texto_codificar = texto_codificar.toLowerCase();

    for (let i = 0; i < texto_codificar.length; i++) {
        if (texto_codificar.includes(matriztext[i][0])){
            texto_codificar = texto_codificar.replaceAll(matriztext[i][0], matriztext[i][1]);
        }
    }
    return texto_codificar;
}

function desencriptar() {
    const text_desencriptado = decodificar(texto.value);

    resultado.innerHTML = `<div class="parte-II_resultado">${text_desencriptado}</div>  <button class="copiar parte-II_resultado_button" onclick = "copiar()">Copiar</button> `;

    texto.value = '';
}

function decodificar(texto_decodificar) {
    matriztext = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    texto_decodificar = texto_decodificar.toLowerCase();

    for (let i = 0; i < texto_decodificar.length; i++) {
        if (texto_decodificar.includes(matriztext[i][1])) {
            texto_decodificar = texto_decodificar.replaceAll(matriztext[i][1], matriztext[i][0]);
        }
    }
    return texto_decodificar;
}

function copiar() {
    const text_copiado = document.querySelector('.parte-II_resultado ').innerHTML;
    navigator.clipboard.writeText(text_copiado).innerHTML;
    resultado.value = '';
}


