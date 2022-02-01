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
const business2 = 950;
const minister2 = 750;
const army2 = 50;
if (business > ministe2r && business2 > army2) {
    console.log("Business IS Bigger");
}
else if (minister2 > business2 && minister2 > army2) {
    console.log("Minister is Bigger");
}
else {
    console.log("Army is Bigger");
}
======================= */

/* ==================
//math.min, math.max use kore...
const business3 = 950;
const minister3 = 750;
const army3 = 1050;

var maxMin3 = Math.min(business3, minister3, army3);
console.log("Small Is:", maxMin3); // small ta asbe...

var maxMin3 = Math.max(business3, minister3, army3);
console.log("Big Is:", maxMin3); // big ta asbe...
================================== */

// function diye min max...
let number1 = 15;
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

// console.log(bigger(80, 90, 70)); // এইটা unComment করলে let number1,2,3 বাদ দিয়ে কাজ হবে...(নিচের larger var টা বাদ যাবে)

let largger = bigger(number1, number2, number3);
console.log("Biger Is : ", largger); // Output : jeita boro sieta asbe(number1 15)


