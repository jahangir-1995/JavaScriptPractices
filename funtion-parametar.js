// function startFan(){
//     console.log('go to near the board')
//     console.log('Press THE Switch');
// }
// // Call the funtion
// startFan();

function getSingara(taka){
    console.log( "singara nibo", taka);
    console.log("Mama singra den");
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 90;
var singara = getSingara(money); // getSingara(taka) taka holo parameter ba value eikhane money er value 250 tar mane taka er value holo 250
console.log("Ai nen singara", singara);