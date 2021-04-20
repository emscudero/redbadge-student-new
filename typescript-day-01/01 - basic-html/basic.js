// create 3 variable  button, input1 , input2
// use getElementById method to store the "btn", "number1", "number2"

// Add eventlistner to button that will just do call a function handleClick.

// make a function called addNumbers that takes two parameters (num1, num2)

// the function addNumbers should return num1+num2

// inside function handleClick call the addNumbers function and console log the result comingback from addNumbers

let button = document.getElementById("btn");

let input1 = document.getElementById("number1"); // or parseFloat to add together
let input2 = document.getElementById("number2");

button.addEventListener("click", () => {
  console.log(addNumbers(input1.nodeValue, input2.value));
});

function addNumbers(num1, num2) {
  console.log(typeof num1);

  return num1 + +num2; // or Number (num1) + Number(num2) to add it versus concade it
}
