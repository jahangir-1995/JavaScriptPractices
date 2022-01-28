function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total =number1 + number2;
    return total;
}

var fristNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(fristNumber, secondNumber);
console.log(result); //Output= 82;

function multiplyNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var fstNums = 5;
var sndNums = 100;
var total = multiplyNumbers(fstNums, sndNums);
console.log("total after multiply:",total); // OutPut= total after multiply: 500;