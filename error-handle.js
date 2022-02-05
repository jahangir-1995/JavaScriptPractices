/* ============
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
=================== */


  //My function
  function anaToVori(ana){
    let myAna = ana / 16;

    
    try {
        if(anaToVoriConverter == "") throw "empty";
        if(anaToVoriConverter == letter) throw "not a number";
        
      }
      catch(err) {
        anaToVoriConverter = "Input is " + err;
      }

      return Math.abs(myAna);
}
let myAnas = juyytt;
let anaToVoriConverter = anaToVori(myAnas);
console.log(anaToVoriConverter);