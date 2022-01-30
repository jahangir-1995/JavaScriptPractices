function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches', feet);

var dadiInches = 144;
var feet2 = inchToFeet (dadiInches);
console.log('dadi inches', feet2);

var naniInches = 156;
var feet3 = inchToFeet (naniInches);
console.log('nani inches', feet3);


//Mile to kilomeeters
function mileTokilo(miles){
    var km = miles * 1.6094;
    return km;
}
var maraton = mileTokilo(26.2);
console.log('marathon to km', maraton.toFixed(1));