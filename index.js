'use strict';

// Import prompt-sync untuk input dari terminal
const prompt = require('prompt-sync')();

// -------------------------------
// 1. Fungsi untuk validasi input angka
// -------------------------------
function getValidNumberInput(promptMessage) {
  let input;
  while (true) {
    input = prompt(promptMessage);
    const number = Number(input);

    if (!isNaN(number)) {
      return number;
    } else {
      console.log("❌ Invalid input. Please enter a valid number.");
    }
  }
}

// -------------------------------
// 2. Fungsi untuk validasi operator
// -------------------------------
function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  let operator;

  while (true) {
    operator = prompt(promptMessage);
    if (validOperators.includes(operator)) {
      return operator;
    } else {
      console.log("❌ Invalid operator! Please use one of (+, -, *, /, %, **)");
    }
  }
}

// -------------------------------
// 3. Fungsi operasi aritmatika
// -------------------------------
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b === 0 ? "Error: Division by zero!" : a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// -------------------------------
// 4. Main Calculator Logic
// -------------------------------
while (true) {
  console.log("\n====================");
  console.log("Simple Calculator");
  console.log("====================");

  const num1 = getValidNumberInput("Enter the first number: ");
  const operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");
  const num2 = getValidNumberInput("Enter the second number: ");

  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    case '%':
      result = modulo(num1, num2);
      break;
    case '**':
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  console.log(`\nResult: ${result}`);

  // -------------------------------
  // 5. Analisis tipe data dan nilai hasil
  // -------------------------------
  if (typeof result === 'number') {
    if (result > 0) {
      console.log("The result is a positive number.");
    } else if (result < 0) {
      console.log("The result is a negative number.");
    } else {
      console.log("The result is zero.");
    }

    // Cek integer atau float
    if (Number.isInteger(result)) {
      console.log("It's an integer.");
    } else {
      console.log("It's a floating-point number.");
    }

    // Cek genap/ganjil dengan ternary operator
    console.log(result % 2 === 0 ? "Even number." : "Odd number.");

    // Contoh kondisi kompleks
    if (result > 0 && result % 2 === 0) {
      console.log("Positive and even number!");
    } else if (result < 0 || !Number.isInteger(result)) {
      console.log("Either negative or not an integer.");
    }

  } else if (typeof result === 'string') {
    console.log(`Error: ${result}`);
  } else {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  // -------------------------------
  // 6. Mekanisme keluar
  // -------------------------------
  const again = prompt("\nDo you want to calculate again? (yes/no): ").toLowerCase();
  if (again === 'no') {
    console.log("Thank you for using the calculator!");
    break;
  }
}

