var textoDigitado = document.querySelector('#input-texto') //

// constante para criptografia
const criptografia = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat'
    }
    // constante para descriptografia
const descripto = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    }
    // principal funçao a criptografia
function criptografar() {
    var texto = textoDigitado.value;
    var percorrerString = '';

    for (var indexDoTexto = 0; indexDoTexto < texto.length; indexDoTexto++) {
        if (texto[indexDoTexto] == 'e') {
            percorrerString += criptografia.e
        } else if (texto[indexDoTexto] == 'i') {
            percorrerString += criptografia.i
        } else if (texto[indexDoTexto] == 'a') {
            percorrerString += criptografia.a
        } else if (texto[indexDoTexto] == 'o') {
            percorrerString += criptografia.o
        } else if (texto[indexDoTexto] == 'u') {
            percorrerString += criptografia.u
        } else {
            percorrerString += texto[indexDoTexto]
        }
    }
    textoDigitado.value = percorrerString;
}


//funçao para descriptografar 
function descriptografar() {
    const descript = textoDigitado.value

    return textoDigitado.value = descript.replaceAll('ober', descripto.ober)
        .replaceAll('enter', descripto.enter)
        .replaceAll('imes', descripto.imes)
        .replaceAll('ai', descripto.ai)
        .replaceAll('ufat', descripto.ufat)
}

//função copiar
function copiar() {
    var caixaDeTexto = document.getElementById('input-texto') //
    caixaDeTexto.select(); //seleciona o texto
    caixaDeTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(caixaDeTexto.value);
}

caixaDeTexto.addEventListener('click', function(e) {
    let textArea = document.querySelector('.areacolar');
    textArea.select();
    document.execCommand('copy');

});