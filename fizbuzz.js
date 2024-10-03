let num;
do {
    num = parseInt(prompt("Enter a number between 1 and 100:"));
    if (isNaN(num) || num < 1 || num > 100) {
        console.log("Invalid input. Please enter a valid number between 1 and 100.");
    }
}
while (isNaN(num) || num < 1 || num > 100);

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not catorized");
}
