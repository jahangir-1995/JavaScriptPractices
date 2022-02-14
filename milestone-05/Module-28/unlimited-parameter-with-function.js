// এইভাবে কাজ করলে আনলিমিডেড প্যারামিটার দিলেও সবার কাজ করবে...যোগ করার জন্য অনেক কাজ যখন প্যারামিটার অনেক লাগবে তখন কাজ করা যাবে
function addNumbers (num1, num2) {
    let result = 0;
    for(const num of arguments) {
        result =  result + num;
    }
    return result;
}

const sum = addNumbers(23, 13, 50, 100);
console.log(sum);

// name er jonno...
function getFullName(fstName, lastName){
    let fullName = "";
    for(const part of arguments){
        fullName = fullName + part + " ";
    }
    return fullName;
}
const names = getFullName("manik", "roton", "jahangir", "alom", "Ab:", "kader");
console.log(names);