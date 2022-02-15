document.getElementById("sixteenGB").addEventListener("click", function(){

    updatePrice("memory-cost",  200);
});

document.getElementById("ssd3").addEventListener("click", function(){

    updatePrice("storage-cost",  500);
});

document.getElementById("paid-delivery").addEventListener("click", function(){

    updatePrice("delivery-cost",  50);
});


function updatePrice (itemID, price){
    
        const memoryCost = document.getElementById(itemID);
        memoryCost.innerText = price;
    
        const bestPrice = document.getElementById("best-price").innerText;
        const memoryPrice = document.getElementById("memory-cost").innerText;
        const storagePrice = document.getElementById("storage-cost").innerText;
        const deliveryPrice = document.getElementById("delivery-cost").innerText;
    
        const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    
        const total = document.getElementById("total-price");
        total.innerText = totalPrice;
  
}