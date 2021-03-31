"use strict";
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2"); //type casting
let button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log(addNumbers(Number(input1.value), Number(input2.value)));
});
function addNumbers(num1, num2) {
    return num1 + num2;
}
