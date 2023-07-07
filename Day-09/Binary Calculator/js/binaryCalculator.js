function append(value) {
    document.getElementById('res').innerHTML += value;
}

function clearRes() {
    document.getElementById('res').innerHTML = '';
}

function evaluate() {
    const expression = document.getElementById('res').innerHTML;
    const operands = expression.match(/[01]+/g);
    const operator = expression.match(/[\+\-\*\/]/);

    if (operands.length === 2 && operator !== null) {
        const num1 = parseInt(operands[0], 2);
        const num2 = parseInt(operands[1], 2);

        let result;
        switch (operator[0]) {
            case '+':
                result = (num1 + num2).toString(2);
                break;
            case '-':
                result = (num1 - num2).toString(2);
                break;
            case '*':
                result = (num1 * num2).toString(2);
                break;
            case '/':
                result = Math.floor(num1 / num2).toString(2);
                break;
        }

        document.getElementById('res').innerHTML = result;
    }
}
