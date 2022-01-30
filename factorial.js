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

 //function with while loop Reverse Way
 function getfacto3(nums3){
     let facto3 = 1;
     let i = nums3;
     while (i >= 1){
         facto3 = facto3 * i;
         i--;
     }
     return facto3;
 }
 let sndFacto = 6;
 let newFacto = getfacto3(sndFacto);
 console.log(newFacto);

 //function with for loop Reverse Way
 function getfacto2(num4){
     let facto4 = 1;
     let i = num4;
     for(let i = num4; i >= 1; i --){
         facto4 = facto4 * i;
     }
     return facto4;
 }
 let sndFacto2 = 6;
 let newFacto2 = getfacto2(sndFacto2);
 console.log(newFacto2);
 