  
// Problem 01 (anaToVori)
function anaToVori(ana){
    if (typeof ana != "number"){
        return "Input a Valid Number";
    }
    const myAna = ana / 16;
    return Math.abs(myAna);
}

// let myAnas = 24;
// let anaToVoriConverter = anaToVori(myAnas);




//Problem 02 
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity){
    if(typeof singaraQuantity != "number" ){
        return "Please Input a Valid number";
    }
    if(typeof somuchaQuantity != "number" ){
        return "Please Input a Valid number";
    }
    if(typeof jilapiQuantity != "number" ){
        return "Please Input a Valid number";
    }

    let singara = 7;
    let somucha = 10;
    let jilapi = 15;

    const totalBreckFristCost = singaraQuantity * singara + somuchaQuantity * somucha + jilapiQuantity * jilapi;
    
    return Math.abs(totalBreckFristCost);
}

// let myOrderList = pandaCost(2, 2, 3);



// problem 03
function  picnicBudget(totalPassengers){
    if(typeof totalPassengers != "number" ){
        return "Please Input a Valid number";
    }
    
    const fristHandredPassengersCost = 5000;
    const secondHandredPassengersCost = 4000;
    const getBonusPassengersCost = 3000;

    if(totalPassengers <= 100){
        let perPassengers = totalPassengers * 5000;
        return Math.abs(perPassengers);
    }
    else if(totalPassengers <= 200){
        let fristHanderdCost = fristHandredPassengersCost * 100;
        let secontHandered = totalPassengers - 100;
        let getBonus = secondHandredPassengersCost * secontHandered;
        let allSecondHanderdCost = fristHanderdCost + getBonus;
        return Math.abs(allSecondHanderdCost);
    }
    else{
        let fristHanderdCost = fristHandredPassengersCost * 100;
        let secontHanderedCost = secondHandredPassengersCost * 100;
        let theirdHandred = totalPassengers - 200;
        let getBonus = getBonusPassengersCost * theirdHandred;
        let allBonus = fristHanderdCost + secontHanderedCost + getBonus;
        return Math.abs(allBonus);
    }

}

// let myTotalList = 201;
// let totalList = picnicBudget(myTotalList);




// problem 04
function oddFriend(friendList){

    let oddName = "";
    for(let i = 0; i < friendList.length; i++){
        const nameList = friendList[i]
        if(nameList.length % 2 != 0){
            oddName = nameList;
            break;
        }
    }
    return oddName;
}

let friendList2 = ["Al.Mamun", "Md.", "Ab.Kader", "Mostafizur", "aline"];
let oddFriendName = oddFriend(friendList2);
console.log(oddFriendName);

