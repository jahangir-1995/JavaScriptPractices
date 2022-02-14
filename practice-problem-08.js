/* 
৩) fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে। 
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const fruitName = fruits.slice(1, 3);
console.log(fruitName);

/* ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 

এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়। 
 */

const friendNames = ["Md.Banana", "md.Orange", "md.Lemon", "Md.Apple", "md.Mango"];


const findName = "Md";

const find = [];
for(const friendName of friendNames){
   /*eivabe dile upper case korle upar,lower case dekhabe...
    if(friendName.toLowerCase().indexOf(findName.toLowerCase) != -1) */
    if(friendName.indexOf(findName) != -1){
        find.push(friendName);
    }
}
console.log(find);



//function diye 

function findNames2(){
    let find2 = [];
    for(const friendName2 of friendNames2){
        if(friendName2.indexOf(findName2) != -1){
            find.push(friendName2);
        }
     }
     return find2;
}
const findName2 = "Md";

const friendNames2 = ["Md.Banana", "md.Orange", "md.Lemon", "Md.Apple", "md.Mango"];
const finalOutPut = findNames2(friendNames2);
console.log(finalOutPut);
