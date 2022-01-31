// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 


/* ============

function inputNumbers(marks){

        if (marks <= 32){
            console.log("Fail");
        }
        else if (marks <= 39){
            console.log("D");
        }
        else if(marks <= 49){
            console.log("C");
        }
        else if(marks <= 59){
            console.log("B");
        }
        else if(marks <= 69){
            console.log("A-");
        }
        else if(marks <= 79){
            console.log("A")
        }
        else if(marks <= 100){
            console.log("A+");
        }
        else{
            console.log("Invalid Number !");
        }

}

let myNumber = 101;
let myNumber2 = inputNumbers(myNumber);
console.log(myNumber2);
 

=========================== */


// 04.সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

function interestRate(numbers){
    numbers = myInput * myPersent * timeInYear/ 100;
    return numbers;
}
let myInput = 100000;
let myPersent = 10;
let timeInYear = 3;
let inPutNum = interestRate(myInput);
console.log(inPutNum);