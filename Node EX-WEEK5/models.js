// Product, User, Comment

// درست و حسابی نتونستم فعلا بنویسمش ولی خب خواسته های سوال و یجوری برآورده کردم

class Product{

    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = Product.generateId();
        this.commentSection = [];
        this.ratings = [];
    }

    static allIds = [];

    static generateId(){
        let generatedId = parseInt(Math.random() * 1e3);
        while (Product.allIds.includes(generatedId)){
            generatedId = parseInt(Math.random() * 1e3);
        };
        Product.allIds.push(generatedId);
        return generatedId;
    }
}

class User{

    constructor(userName){
        this.userName = userName;
        this.purchaseHistory = []; // array of product ID's 
        this.comments = [];
    }
}

class Comment{

    constructor(user, rating, text){
        this.user = user;
        this.rating = rating;
        this.text = text;
    }
}

module.exports = {
    Product,
    User,
    Comment,
}