const names = ["abul", "babul", "cabul", "dadul", "gabul", "ebul", "gabul", "habul", "dadul", "ebul"];

function removeDuplicate(names) {
    const unique = [];
    //for loop এর পরিবর্তে এইভাবে short ভাবে লিখা যায় (ফরের আগের ভার হলো const element) of (i <names.length= হলো names)
    for(const element of names){
        //console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); //doble name asbe na ekoi vabe number thakleo kaj hoy