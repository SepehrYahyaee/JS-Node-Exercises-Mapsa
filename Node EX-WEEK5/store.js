const { Product, User, Comment} = require('./models.js');

const products = {};
const users = [];

function addProduct(product, count){
    products[product.id] = {product, count};
}

function removeProduct(productId, count){
    if (!Product.allIds.includes(productId)){
        throw new Error("the product you're trying to remove doesn't exist!")
    } else {
        if (products[productId].count - count <= 0){
            throw new Error('cannot have negative or no amount of products!!!!')
        }
        products[productId].count -= count;
    }
}

function addUser(user){
    users.push(user.userName);
}

function getTotalInventoryCount(){
    let total = 0;
    for (let ID of Product.allIds){
        total += products[ID].count;
    }
    return total;
}

function getTotalProfit(){
    let total = 0;
    for (let ID of Product.allIds){
        total += products[ID].product.price;
    }
    return total;
}

function userBuy(user, productId, count){
    if (!(users.includes(user.userName))){
        throw new Error("this user doesn't exist!");
    } else if (!(Product.allIds).includes(productId)){
        throw new Error("this product doesn't exist!");
    } else {
        (user.purchaseHistory).push(products[productId].product.name);
        products[productId].count -= count;
    }
}

function addComment(comment, product){ // instance of the Comment class.
    if (!(users.includes(comment.user.userName))){
        throw new Error("this user doesn't exist!");
    }
    if (!(Product.allIds.includes(product.id))){
        throw new Error("this product doesn't exist!")
    }
    product.commentSection.push(`${comment.text} - ${comment.user.userName}.`);
    comment.user.comments.push(comment.text);
    (product.ratings).push(comment.rating);
}

function getCommentsByUser(user){
    if (!(users.includes(user.userName))){
        throw new Error("User doesn't exist!");
    }
    return [user.comments];
}

function getRating(product){
    let total = 0;
    if (!(Product.allIds).includes(product.id)){
        throw new Error("this product doesn't exist!");
    }
    for (let i = 0 ; i < product.ratings.length ; i++){
        total += Number(product.ratings[i]);
    }
    return `${((total) / (product.ratings.length))} stars.`;
}

const product1 = new Product("Boshghab", 100, "Ashpazkhune");

addProduct(product1, 10);
// console.log(products);

const user1 = new User('Heshmat')
addUser(user1);
// console.log(users);

// console.log(getTotalInventoryCount());
// console.log(getTotalProfit());

userBuy(user1, product1.id, 2);

// console.log(user1.purchaseHistory);
// console.log(products);

addComment(new Comment(user1, 2, "Boshghabe be dard nakhori bood"), product1);
addComment(new Comment(user1, 5, "halalet ajab Boshqabie"), product1);

// console.log(product1.commentSection);

// console.log(getCommentsByUser(user1));
// console.log(product1.ratings);
// console.log(getRating(product1));
// console.log(products);