// slice usese
var letter = [1, 2, 3, 4, 5, 6, 7];
var sndLetter = letter.slice(2, 4);
console.log(sndLetter); //Output: 2,3; 

// স্লাইস এর starting এ যে নাম্বার আছে তার থেকে পরে যে নাম্বার আছে তার থেকে বিয়োগ করে যা হয় সেই কয়টা দেখাবে


// splice usese
var letter2 = [1, 2, 3, 4, 5, 6, 7];
var sndLetter2 = letter2.splice(1, 3);
console.log(sndLetter2); //Output: 2,3,4; এক বাদ যাবে । ৩ টা থাকবে 

// function diye 
function multiplyNums (num1, nums2) {
    var result = num1 * nums2;
    return result;
}
var fstNum = 5;
var sndNum = 500;
var total = multiplyNums(fstNum, sndNum);
console.log("total:", total); //Output=2500;