// const business = 950;
// const minister = 750;
// const army = 50;

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
var maxMin = Math.min(business, minister, army);
console.log("Small Is:", maxMin);

var maxMin = Math.max(business, minister, army);
console.log("Big Is:", maxMin);

================================== */ 

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

// console.log(bigger(80, 90, 70));

let largger = bigger(80, 70, 90);
console.log("Biger Is : ", largger);