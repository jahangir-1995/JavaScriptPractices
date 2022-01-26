var onionPrice = 42;
var eggPrice = '45';
var total = onionPrice + eggPrice;
console.log(total);
// NOTE number , string ke eksathe jog korle pasha pasi dekhabe string  ke jog korleo pasa pasi dekhay 
var onionPrice2 = '50';
var eggPrice2 = '40';
var total2 = onionPrice2 + eggPrice2;
console.log(total2);
 
var onionPrice3 = '42.20';
var eggPrice3 = '40.5';
var priceNumber = parseInt(eggPrice3);
// var eggPriceNumber = parseFloat(eggPrice3);

console.log(priceNumber);

// String ke number a convart
var onionPrice4 = '42.20';
var eggPrice4 = '40.5';
var onionNumber = parseFloat(onionPrice4);
var eggNumber = parseFloat(eggPrice4);

console.log(onionNumber + eggNumber);

// Point ke niyontron 
var fristNumber = 0.1;
var secondNumber = 0.2;
var totalNumber = fristNumber + secondNumber;
// totalNumber = totalNumber.toFixed(1);
// totalNumber = parseFloat(totalNumber);
// console.log(totalNumber);

// sob gula ek bare kora
console.log(parseFloat(totalNumber.toFixed(1)));