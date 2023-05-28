function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resoult;

    switch (operator) {
        case '+':
            resoult = num1 + num2;
            break;
        case '-':
            resoult = num1 - num2;
            break;
        case '/':
            resoult = num1 / num2;
            break;
        case '*':
            resoult = num1 * num2;
            break;
    }
    document.getElementById('resoult').value = resoult;
}