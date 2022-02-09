//HTML file er moddy ase... <button onclick="makeYellow()">Click Me: Yellow</button>
function makeYellow(){
    document.body.style.backgroundColor = "yellow";
}

function makeRed(){
    document.body.style.backgroundColor = "red";
}
const makeRedBtn = document.getElementById("make-red");
makeRedBtn.onclick = makeRed; //এইখানে অনলি ফাংশন এর নাম দিতে হবে () ব্র্যকেট দেয়া যাবে না


// anathor way... with anonymous function
const makeGreenBtn = document.getElementById("make-green");
makeGreenBtn.onclick = function (){
    document.body.style.backgroundColor = "green";
} // function Name optional

//handle with event listener using...
const goldenBtn = document.getElementById("make-golden");
goldenBtn.addEventListener("click", makeGolden);
function makeGolden (){
    document.body.style.backgroundColor = "goldenrod"
}


// event listener with function
const hotPinkBtn = document.getElementById("make-hotPink");
hotPinkBtn.addEventListener("click", function (){
    document.body.style.backgroundColor = "hotpink";
});

// event listener with anonymous function
document.getElementById("make-ligntBlue").addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});