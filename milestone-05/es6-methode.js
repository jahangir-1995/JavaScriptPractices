// tamplate string 
let names = "Najmul";
let sms = "how are you?";
let age = "and Yours"
let fullSms = `Hellow, ${names}, ${sms}`;
let fullSms2 = `Hellow, I am ${13 + 13}, ${age}`;
console.log(fullSms2); //Output: Hellow, I am 26, and Yours

//array function
const sum = (a, b) => a+b;
const result = sum(10, 15);
console.log(result);

const sum2fn = (a, b, c) => {
    let sum1 = a+b;
    let sum2 = a + c;
    let sumAll = sum1 + sum2;
    return sumAll;
}
const result2 = sum2fn(20, 20, 10);
console.log(result2)

// array desructuring 
let myVehicles = ["Toyota", "Samoli", "CBR", "Hanif"]
const [cars, SamoliBus, HondaBike, HanifBus] = myVehicles;
//index onujayi name hobe...

console.log(cars); //output: Toyota;
console.log(HondaBike);//output: CBR;

// spreat oparators...
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

console.log(...arr2); // only value copy hobe;
console.log(arr3);

// for of loop
const nums = [1,2,3,4,5,6,7];
for(let num of nums){
    console.log(num);
}//output: 1-7 niche niche asbe;

// default parameter...
const sum2fn2 = (a =5, b =5, c=0) => {
    let sum12 = a+b;
    let sum22 = a + c;
    let sumAll2 = sum12 + sum22;
    return sumAll2;
}
const result22 = sum2fn2(20, 20);// jodi keu parameter keu na dey tobe value 5, 5,0 jog hobe... error dekhabe na
console.log(result22)

function sum3 (isAdd = true){
    if(isAdd == true) {
        console.log("True");
    }
    else{
        console.log("False");;
    }
}
sum3()

function welcomeSms(names = "Hero"){
    let sms = `Hi ${names}, Welcome To our Website`;
    return sms;
}
welcomeSms("Manik");

// Map, filter find

//map
const myArr = [2,3,4,5,6,7,8,9,10];
const tripledArr = myArr.map(num2 => num2 * 3);
console.log(tripledArr);

const name3 = ["alom","roton","hosen"];
const sms3 = name3.map(name3 => `Hello ${name3}, What Your Doing Now`);
console.log(sms3); //output:['Hello alom, What Your Doing Now', 'Hello roton, What Your Doing Now', 'Hello hosen, What Your Doing Now']

// filter 
const newArr = [1,2,3,4,5,6,7,8,9,10];
let filteredArr = [];

// odd numbers (jor numbers asbe)
for(let num4 of newArr){
    if(num4 % 2 == 0){
        filteredArr.push(num4);
    }
}
console.log(filteredArr);

// even numbers (bijor numbers asbe)
for(let num4 of newArr){
    if(num4 % 2 != 0){
        filteredArr.push(num4);
    }
}
console.log(filteredArr);