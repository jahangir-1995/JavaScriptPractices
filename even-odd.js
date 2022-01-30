// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);


function isEven(number) {
    if(number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('Even Number Check:', isMyNumberEven); //Output=false

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('Her Number Even:', isHerNumberEven); //OutPut=true

// Odd number
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const isMyNumberOdd = 1300;
const herNumber2 = isOdd(isMyNumberOdd);
console.log('Her Number Odd:', herNumber2); //Output= 1 hole True, 0 hole False;