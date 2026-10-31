// 1. COUNTER — topics: variables, getElementById, click events, textContent
const counterValue = document.querySelector("#counter-value");
const decrementBtn = document.querySelector("#decrement-btn");
const incrementBtn = document.querySelector("#increment-btn");
const resetBtn = document.querySelector("#reset-btn");

incrementBtn.addEventListener("click", () => counterValue.textContent++);

decrementBtn.addEventListener("click", () => {
    if (counterValue.textContent > 0) {
        counterValue.textContent--;
    }
});

resetBtn.addEventListener("click", () => counterValue.textContent = 0);

// 2. GREETING — topics: input .value, string concatenation / template literals
const nameInput = document.querySelector("#name-input");
const greetBtn = document.querySelector("#greet-btn");
const greetingOutput = document.querySelector("#greeting-output");

greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    greetingOutput.textContent = name ? `Hello, ${name}!` : "Hello!";
});

// 3. CALCULATOR — topics: numbers, Number(), if/else or switch
const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const operatorSelect = document.querySelector("#operator");
const calculateBtn = document.querySelector("#calculate-btn");
const calcResult = document.querySelector("#calc-result");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

calculateBtn.addEventListener("click", () => {
    const num1 = Number.parseInt(num1Input.value);
    const num2 = Number.parseInt(num2Input.value);
    const operator = operatorSelect.value;
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = divide(num1, num2);
            }
            break;
        default:
            result = "Invalid operator";
    }

    num1Input.value = "";
    num2Input.value = "";
    operatorSelect.value = "+";

    calcResult.textContent = result;
})
