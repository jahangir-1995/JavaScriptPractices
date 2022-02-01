/* const numbers = [44, 34, 23, 32, 34, 78];
let sum = 0;
for (let i = 0; i <numbers.length; i++) {
    let element = numbers[i];
    sum = sum + element;
}
console.log(sum); */


// array With function
const numbers2 = [44, 34, 23, 32, 34, 78,100];
function arrayTotal (numbers2) {
    let sum2 = 0;
    for(let i = 0; i <numbers2.length; i++){
        const element2 =  numbers2[i];
        sum2 = sum2 + element2;
    }
    return sum2;
}
let total = arrayTotal(numbers2);
console.log(total);