// JavaScript object Notation = JSON
const user = {id: 11, name: "Amir khan", job: "actor"};
const stringified = JSON.stringify(user);
// console.log(stringified)
const shop = {
    names: "alia shop",
    address: "mumbai",
    products: ["laptop", "mobile","pepsi"],
    owner: {
        ownerName: "Alia bhatt",
        profession: "actor"
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified)
console.log(converted);