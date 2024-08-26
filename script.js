document.getElementById('encryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    let outputTextArea = document.getElementById('outputText');
    
    outputTextArea.value = encryptedText;

    // Mostrar el área de presentación de texto
    outputTextArea.style.display = 'block'; // Asegúrate de que sea visible
    outputTextArea.style.opacity = '1'; // Hacer que la opacidad sea 1 para que sea visible
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    let outputTextArea = document.getElementById('outputText');
    
    outputTextArea.value = decryptedText;

    // Mostrar el área de presentación de texto
    outputTextArea.style.display = 'block'; // Asegúrate de que sea visible
    outputTextArea.style.opacity = '1'; // Hacer que la opacidad sea 1 para que sea visible
});

document.getElementById('copyButton').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

document.getElementById('resetButton').addEventListener('click', function() {
    reset();
});

function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function reset() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';

    // Ocultar el área de presentación de texto
    document.getElementById('outputText').style.display = 'none'; // Ocultar el campo de salida
    document.getElementById('outputText').style.opacity = '0'; // Reducir la opacidad a 0 para ocultarlo
}
