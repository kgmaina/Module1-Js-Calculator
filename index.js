function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
    }
    let result1 = addNumbers(5,8);
    console.log("The sum is:", result1);
function subtractNumbers(num1, num2) {
    let diff = num1 - num2;
    return diff;
    }
    let result2 = subtractNumbers(7, 3);
    console.log("The difference is:", result2);
function multiplyNumbers(num1, num2) {
    let product = num1 * num2;
    return product;
}
    let result3 = multiplyNumbers(4, 6);
    console.log("The product is:", result3);
function divideNumbers(num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}
    let result4 = divideNumbers(6, 3);
    console.log("The quotient is:", result4);
const history = [];
history.push(result1, result2, result3, result4);
console.log(history);
