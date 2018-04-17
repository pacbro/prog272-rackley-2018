const mathResult = (function() {
    return (4 + 6) * 12;
})();

console.log(mathResult);

(function() {
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < 10; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
})();

var primeNumbers = function() {
    var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    for (let o of prime) {
        console.log(o);
    }
}
primeNumbers();

var address = function(obj) {

    for (var j in obj) {
        console.log(j + ": " + obj[j]);
    }

}

var person = {
    firstName: "George",
    lastName: "Washington",
    address: "3200 Mount Vernon Hwy",
    city: "Mt Vernon",
    state: "VA",
    zip: "22121"
}

address(person);

class calculator {
    add(operandA, operandB) { return operandA + operandB; }
    subtract(operandA, operandB) { return operandA - operandB; }
    multiply(operandA, operandB) { return operandA * operandB; }
    divide(operandA, operandB) { return operandA / operandB; }
};

var calc = new calculator();

console.log(calc.add(2, 3));
console.log(calc.subtract(5, 2));
console.log(calc.multiply(3, 5));
console.log(calc.divide(15, 3));
