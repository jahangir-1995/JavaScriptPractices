const products = [
    {name: "iphone 14", price: 70000},
    {name: "samsung s11", price: 60000},
    {name: "symphoney z14", price: 50000},
    {name: "htc h4", price: 40000},
    {name: "nokia s11", price: 30000},
    {name: "google s11", price: 35000},
    {name: "realme n14", price: 42000},
    {name: "samsung s13", price: 15000},
    {name: "samsung s24", price: 25000},
];

for(const product of products){
    if(product.price < 30000){
        break;
    }
    console.log(product)
}

// er pore break er poriborte continue use kora dekhaise .. continue holo skip er kaj kore je condition deya hoyese ta full fill korlei continue korbe...