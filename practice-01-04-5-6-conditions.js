/*

৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

*/

/* ==============
let fstNum = 70;
let sndNum = 10;

if(fstNum < sndNum){
    console.log("sndNum Big Num :");
}
else if(fstNum > sndNum){
    console.log("fsdNum IS biggers");
}
else if(fstNum == sndNum){
    console.log("Two Num is Equals");
}
else if(fstNum != sndNum){
    console.log("NOT Equals");
}

else{
    console.log("fsd num IS BIG");
}
=========================== */

// আগের যে কোন একটা Condition পূরন করলে নিচে আসবে না

/*
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
*/

let savingMoney = 50000;
let jobConfirm = true;

if (savingMoney > 50000 && jobConfirm == true){
    console.log("Patri Dekhbo");
}
else if(savingMoney == 50000 && jobConfirm == true){
    console.log("Biya korabo");
}

let savingMoney2 = 80000;
let jobConfirm2 = true;

if (savingMoney2 == 50000 && jobConfirm2 == true){
    console.log("Patri Dekhbo");
}
else if(savingMoney2 == 80000 && jobConfirm2 == true){
    console.log("Biya korabo age kisu din job kor!");
}


let savingMoney3 = 80000;
let jobConfirm3 = false;

if (savingMoney3 == 50000 && jobConfirm3 == true){
    console.log("Patri Dekhbo");
}
else if(savingMoney3 == 80000 && jobConfirm3 == true){
    console.log("Biya korabo age kisu din job kor!");
}
else{
    console.log("Kopale biya nai");
}