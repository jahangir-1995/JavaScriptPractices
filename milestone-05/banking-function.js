//handle deposit btn event
document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    
    // get current deposit 
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    // আগের depositAmount সেট করা
    // string কে number এ convert করা current deposit কারন current deposit হলো string
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update total
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // clear input filed 
    depositInput.value = "";
});

// handle withdrow button
document.getElementById("withdrow-btn").addEventListener("click", function(){
    const withdrowInput = document.getElementById("withdrow-input") ;
    const withdrowAmountText = withdrowInput.value;
    const withdrowAmout = parseFloat(withdrowAmountText);

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

    // Clear withdrow filed
    withdrowInput.value = "";
});