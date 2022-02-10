document.getElementById("btn-submit").addEventListener("click", function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    // user pass 
    const passField = document.getElementById("user-pass");
    const userPass = passField.value;
    
    if(userEmail == "example@gmail.com" && userPass == "demo"){
        window.location.href = "dom.html";// অন্য পেজে নিয়ে যাবে...
    }
    else{
        console.log("invalid")
    }
});