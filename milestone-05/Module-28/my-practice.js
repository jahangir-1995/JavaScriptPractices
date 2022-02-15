/* 
document.getElementById("eightGB").addEventListener("click", function(){

    updatePrice("memory-cost",  0);
});

document.getElementById("sixteenGB").addEventListener("click", function(){

    updatePrice("memory-cost",  200);
});

document.getElementById("ssd3").addEventListener("click", function(){

    updatePrice("storage-cost",  500);
});

document.getElementById("paid-delivery").addEventListener("click", function(){

    updatePrice("delivery-cost",  50);
}); 
// এইগুলার কাজ যাতে সহজে করা যায় তার জন্য নিচে ফাংশোন লিখা হইছে...
*/

onClick("eightGB","memory-cost",  0);
onClick("sixteenGB","memory-cost",  200);

onClick("ssd1","storage-cost",  0);
onClick("ssd2","storage-cost",  220)
onClick("ssd3","storage-cost",  280)

onClick("free-delivery","delivery-cost",  0)
onClick("paid-delivery","delivery-cost",  50)

function onClick (clickId, updateId, prices){
    document.getElementById(clickId).addEventListener("click", function(){
        updatePrice(updateId,  prices);
    });
}



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

const fakeCode = "pHero";

document.getElementById("apply-btn").addEventListener("click", function(){
    const code = document.getElementById("promo-input").value;
    if(code === fakeCode){
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);
        
        const discount = (totalPrice*20) / 100;
        totalPrice = totalPrice - discount;

        total.innerText = totalPrice;
    }
    else{
       console.log ("Invalid code");
    }
});