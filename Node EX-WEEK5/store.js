const { User, Product, Comment } = require("./models.js");

let productsById = {};
let users = [];
let allCount = 0;

function addProduct(product, count){
    productsById[product.id] = {product, count};
    allCount += count;
}

function removeProduct(product, count){
    // !!
}

function addUser(user){
    users.push(user.userName)
}

function getTotalInventoryCount(){
    return allCount;
}

addProduct(new Product("Changal", "70 Toman", "Ashpazkhune"), 5);
addProduct(new Product("Ghashogh", "70 Toman", "Ashpazkhune"), 15);
addProduct(new Product("Boshghab", "150 Toman", "Ashpazkhune"), 20);
addProduct(new Product("Ghablame", "200 Toman", "Ashpazkhune"), 5);
addProduct(new Product("Chaghoo", "70 Toman", "Ashpazkhune"), 20);
addProduct(new Product("Malaghe", "100 Toman", "Ashpazkhune"), 30);
addProduct(new Product("Kafgir", "100 Toman", "Ashpazkhune"), 25);

console.log(productsById);
addUser(new User("Heshmat"));
console.log(users);
console.log(getTotalInventoryCount());