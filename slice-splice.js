// slice usese

var letter = [1, 2, 3, 4, 5, 6, 7];
var sndLetter = letter.splice(1, 3);
console.log(sndLetter);

// function diye 
function multiplyNums (num1, nums2) {
    var result = num1 * nums2;
    return result;
}
var fstNum = 5;
var sndNum = 500;
var total = multiplyNums(fstNum, sndNum);
console.log("total:", total); //Output=2500;