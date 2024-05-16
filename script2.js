function subtract() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let result = num1 - num2;
    alert("Subtraction Result: " + result);
}
function add() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let result = num1 + num2;
    alert("Subtraction Result: " + result);
}

function multiply() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let result = num1 * num2;
    alert("Multiplication Result: " + result);
}

function divide() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    if (num2 === 0) {
        alert("Error: Division by zero.");
    } else {
        let result = num1 / num2;
        alert("Division Result: " + result);
    }
}