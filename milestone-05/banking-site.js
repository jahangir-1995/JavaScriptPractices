//handle deposit btn event
document.getElementById("deposit-btn").addEventListener("click", function(){
    // get amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    //update deposit total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmout = parseFloat(previousDepositText);
    
    const newDepositTotal = previousDepositAmout + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account Balance
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear input filed...
    depositInput.value = "";
});

// handle Withdrow event handler
document.getElementById("withdrow-btn").addEventListener("click", function(){
    const withdrowInput = document.getElementById("withdrow-input");
    const withdrawAmountText = withdrowInput.value;
    const newWithdrowAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrowAmount);

    //set withdrow total
    const withdrowTotal = document.getElementById("withdrow-total");
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;

    // update balance 
    const balanceTotal = document.getElementById("balance-total");

    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdrow filed...
    withdrowInput.value = "";
})