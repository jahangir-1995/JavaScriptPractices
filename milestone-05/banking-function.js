
function getInputValue (inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputAmountText = inputFiled.value;
    const AmountValue = parseFloat(inputAmountText);
    // clear input filed 
    inputFiled.value = "";

    return AmountValue;
}


//handle deposit btn event
document.getElementById("deposit-btn").addEventListener("click", function(){
    const AmountValue = getInputValue("deposit-input");
    
    // get current deposit 
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    // আগের AmountValue সেট করা
    // string কে number এ convert করা current deposit কারন current deposit হলো string
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + AmountValue;

    // update total
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + AmountValue;

    
});

// handle withdrow button
document.getElementById("withdrow-btn").addEventListener("click", function(){

    const withdrowAmout = getInputValue("withdrow-input");

    // update withdrow total
    const withdrowTotal = document.getElementById("withdrow-total");
    const previounWithdrowTotalText = withdrowTotal.innerText;
    const previounWithdrowTotal = parseFloat(previounWithdrowTotalText);

    withdrowTotal.innerText = previounWithdrowTotal + withdrowAmout;

    // update balance total after withdrow
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrowAmout;
});