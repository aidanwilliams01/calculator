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

const addition = "The addition of your numbers equals " + add(number1,number2)+ ".";
const subtraction = "The subtraction of your numbers equals " + subtract(number1, number2) + ".";
const multiplication = "The multiplication of your numbers equals " + multiply(number1,number2) + ".";
const division = "The division of your numbers equals " + divide(number1, number2) + ".";

window.alert(addition + " " + subtraction + " " + multiplication + " " + division);