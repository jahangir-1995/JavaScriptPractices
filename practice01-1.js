// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInch(inch){
    let inches = inch * 12;
    return inches;
}
let myFeet = 1;
let returnInch = feetToInch(myFeet);
console.log("Your Inches is: ", returnInch);


// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(centiMeter){
    let centiMeters = centiMeter * 0.01;
    return centiMeters;
}
let myCentimeter = 100;
let convertToMeter = centimeterToMeter(myCentimeter);
console.log("Your Meter is : ", convertToMeter);
