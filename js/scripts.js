function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const addition = number1 + " + " + number2 + " = " + add(number1,number2)+ ".";
const subtraction = number1 + " - " + number2 + " = " + subtract(number1, number2) + ".";
const multiplication = number1 + " * " + number2 + " = " + multiply(number1,number2) + ".";
const division = number1 + " / " + number2 + " = " + divide(number1, number2) + ".";

window.alert(addition + " " + subtraction + " " + multiplication + " " + division);