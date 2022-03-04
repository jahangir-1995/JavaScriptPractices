const displayLocalStorageCart = () => {
    const cart = getCard();
    for (const name in cart) {
        displayProduct(name);
    }
}

const addItem = () => {
    const nameField = document.getElementById("product-name");
    const name = nameField.value;
    if(!name) {
        return;
    }
    // display in the ui
    displayProduct(name);

    // add to local storage 
    addProductToCart(name);

    // 
    nameField.value = "";
}
const displayProduct = name => {
    const ul = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
}

const getCard = () => {
    const cart = localStorage.getItem("cart");
    let cartObj;
    if(cart) {
        cartObj = JSON.parse(cart);
    }
    else{
       cartObj = {} ;
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCard();
    // eikahne ekoi namer duita product thakle dekhanor jonno if else use kora hoise
    if(cart[name]) {
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }
    const cartSringfied = JSON.stringify(cart);
    localStorage.setItem("cart", cartSringfied);
}

// when click place order btn remove local storage
const placeOrder = () => {
    document.getElementById("products").textContent = "";
    localStorage.removeItem("cart");
}

displayLocalStorageCart();