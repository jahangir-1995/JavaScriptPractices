var danishPrice = 50;
var butterPrice = 25;
var toastPrice = 10;
var wellPakect = false;
var myBuject = 100;

if(danishPrice < myBuject){
    if(wellPakect == true){
        console.log('danish khabo');
    }
    else{
        console.log('danish kabo na');
    }
}
//else if joto khusi to lekha jay kinto if, else ekbar kore likha jay...
else if(butterPrice < myBuject){
    console.log('butter khabo');
}
else if(toastPrice < myBuject){
    console.log('tost Khabo');

}
else{
    console.log('cha khabo');
}
// eikhane main theame holo je jodi mybuject 10tk hole toast khabo, mybuject 25 hole batar khabo, eivabe kaj korbe ar jodi mybuject 10 er kom hoy tobe cha khabo
// NOTE: eikhane kintu soman hole kaj korbe na karon == use kora honi