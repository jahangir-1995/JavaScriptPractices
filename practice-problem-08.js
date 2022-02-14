/* 
৩) fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে। 
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const output = [];
const findeFruits = "Lemon";
for(const fruit of fruits){
    if(fruit.indexOf(findeFruits)){
        output(fruit);
    }
}
console.log(output);