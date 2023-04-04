// Hoisting Example
console.log(multiply(3,5)); //Output: uncaught Reffernce error

var multiply = function(num1, num2){
    return num1 * num2
}

console.log(multiply(3,5));//output: 15