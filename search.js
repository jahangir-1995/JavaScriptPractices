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

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
    }
    return result;
}
const matched = searchProducts(products, "samsung");
console.log(matched);