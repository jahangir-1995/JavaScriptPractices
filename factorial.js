//while loop diye
function getFacto1(nums1) {
    let facto1 = 1;
    let i = 1; 
    while(i <= nums1){
        facto1 = facto1 * i;
        i++;
    }
    return facto1;
}
var nums11 = 6;
var fstFacto1 = getFacto1(nums11);
console.log(fstFacto1); //Out pur =620; 

//for loop diye
var factorial = 1;
 for (var i =1; i <= 7; i++) {
     factorial = factorial * i;
 }
 console.log(factorial); //Out put= 5040;


 // function diye
 function getFacto(nums) {
     let facto = 1;
     for (let i = 1; i <= nums; i++){
         facto = facto * i;
     }
     return facto;
 }
 var nums = 5;
 var fstFacto = getFacto(nums);
 console.log(fstFacto); //Out put=120;