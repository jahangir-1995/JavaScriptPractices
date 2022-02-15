document.getElementById("top-Player-heading").innerText = "Amar Players"
document.getElementById("amar-blogs").innerText = "Amar Blogs"
document.getElementById("amar-course").innerText = "Amar Coures"

/* const TextColor = document.querySelectorAll(".player h3");
TextColor.style.textColor = "red"; */

// add bg-color  
const changeColor = document.querySelector(".players");
changeColor.style.backgroundColor = "rgb(175, 209, 247)";

/* ek somoy ke ke color hobe...
 function rgbColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255); 
    
    return `rgb(${red}, ${green}, ${blue})`
} */


// element create
const li = document.createElement("li");
li.innerText = "amar blogs";

const ul = document.getElementById("blog-list");

ul.appendChild(li);

/* 
    function getInputValue (inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputAmountText = inputFiled.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input filed 
    inputFiled.value = "";
    
    return amountValue;
} 
*/



// input funciton add

function getInput (inputId){
    const inputBtnValue = document.getElementById(inputId);
    const inputValue = inputBtnValue.value;
    inputBtnValue.value = "";
}
document.getElementById("add-btn").addEventListener("click", function(){
const myInput = getInput("input-value");
console.log(myInput);
const myInputValue = myInput.value;
console.log(myInputValue);
});