const business = 950;
const minister = 750;
const army = 50;

/* =================== 
if (business > minister) {
    console.log("business Is Biger");
}
else {
    console.log("minister is bigger");
}
=========================== */


/* ===========================
if (business > minister && business > army) {
    console.log("Business IS Bigger");
}
else if (minister > business && minister > army) {
    console.log("Minister is Bigger");
}
else {
    console.log("Army is Bigger");
}
======================= */


/* ==================
const business2 = 950;
const minister2 = 750;
const army2 = 1050;

var maxMin2 = Math.min(business2, minister2, army2);
console.log("Small Is:", maxMin2);

var maxMin2 = Math.max(business2, minister2, army2);
console.log("Big Is:", maxMin2);
================================== */

let number1 = 11;
let number2 = 12;
let number3 = 13;

function bigger (fst, snd, trd) {
    if(fst > snd && fst > trd) {
        return fst;
    }
    else if ( snd > fst && snd > trd) {
        return snd;
    }
    else{
        return trd;
    }
}

// console.log(bigger(80, 90, 70)); এইটা unComment করলে let number1,2,3 বাদ দিয়ে কাজ হবে...(নিচের larger var টা বাদ যাবে)

let largger = bigger(number1, number2, number3);
console.log("Biger Is : ", largger);
