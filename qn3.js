function calculator(num1,num2,operator){
    switch(operator){
        case '-':
            return num1 - num2;
        case '+':
            return num1 + num2;
        case '*':
            return num1* num2;
        case '/':
            if(num2===0){
                return 'mathematical error'; //checking the condition
            }
            return num1/num2;
        default:
            return 'Wrong input, try again';
    }
}
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

let result = calculator(num1, num2, operator);
alert("The result is: " + result);
