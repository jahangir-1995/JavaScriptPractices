const greetings = "How are You??";

function reverseString(text) {
    let reverse = "";
    for(const letter of text){
        //console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed); //Output uoY era woH (উল্টা ভাবে আসবে)