// সবচেয়ে কম দামের ফোন বের করতে হবে

//array of Object 
const phones = [
    {name: "samsung s5", price: 45000, stroage: 128, camera: 24, quantity: 2},
    {name: "google pixel", price: 46000, stroage: 64, camera: 16, quantity: 5},
    {name: "oppo f7", price: 47000, stroage: 32, camera: 18, quantity: 3},
    {name: "symphoney 8", price: 48000, stroage: 64, camera: 32},
    {name: "htc h5", price: 49000, stroage: 64, camera: 12},
    {name: "nokia n95", price: 41000, stroage: 64, camera: 32},
    {name: "shaowmi r8", price: 42000, stroage: 64, camera: 16},
    
];

/* let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);
*/

// quantity jog kore...
//array of Object 
let cart = [
    {name: "samsung s5", price: 45000, stroage: 128, camera: 24, quantity: 2},
    {name: "google pixel", price: 46000, stroage: 64, camera: 16, quantity: 5},
    {name: "oppo f7", price: 47000, stroage: 32, camera: 18, quantity: 3},
];

let cartTotal = 0;

for(const product of cart){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
    
}
console.log(cartTotal);
