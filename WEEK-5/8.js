// Vifert Jenuben Daniel V - CH.EN.U4AIE21061

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        alert('Invalid Expression');
    }
}
