function fullName(firstName = " ", lastName = " ") {
   return firstName + " " + lastName;
}

let result = fullName("Arya", "Stark");
let expected = "Arya Stark";

if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}

result = fullName("Amit", "Srivastav");
expected = "Amit Srivastav";

if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}


function totalAmount(amount = 0, taxRate = 0) {
    return amount + (amount * taxRate);
}

result = totalAmount(100, 0.1);
expected = 110;
if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}

result = totalAmount(200, 0.2);
expected = 240;
if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}