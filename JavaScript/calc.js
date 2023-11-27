const prompt = require('prompt-sync')();

console.log("=== Calculator ===");
console.log("1 = +");
console.log("2 = -");
console.log("3 = x");
console.log("4 = /");
const input = prompt("Enter number : ")

function operation() {
    const num1 = parseInt(prompt("First Number : "));
    const num2 = parseInt(prompt("Second Number : "));
    if (input == 1){
        return(console.log(num1+num2));
    } else if (input == 2){
        return(console.log(num1-num2));
    } else if (input == 3){
        return(console.log(num1*num2));
    } else if (input == 4){
        return(console.log(num1/num2));
    }
}
if (input == 1){
    operation()
} else if (input == 2){
    operation()
} else if (input == 3){
    operation()
} else if (input == 4){
    operation()
} else {
    console.log("Invalid Input")
}
