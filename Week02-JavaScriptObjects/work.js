var person = {
  firstName: 'Jordan',
  lastName: 'Rackley',
  fullName: function() {return this.firstName + ' ' + this.lastName;},
};

var calculator = {
operand01: -1,
operand02: -1,
add: function() {return this.operand01 +  this.operand02;},
subtract: function() {return this.operand01 -  this.operand02;},
};

calculator.multiply = function() {return this.operand01 *  this.operand02;};

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.firstName.length;

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

divider('Person');

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

divider('Calculator');

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());