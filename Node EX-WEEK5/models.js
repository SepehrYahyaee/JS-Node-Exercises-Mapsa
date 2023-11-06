class User{
    constructor(userName){
        this.userName = userName;
        this.purchaseHistory = [];
    }

    buy(){
        // a "user" buys something from "products".
    }
}



class Product{
    static allIds = [];

    static generateId(){
        const generatedId = parseInt(Math.random() * 1e3);
        while ((Product.allIds).includes(generatedId) && generatedId > 0){
            generatedId = parseInt(Math.random() * 1e3);
        }
        (Product.allIds).push(generatedId);
        return generatedId;
    }

    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = Product.generateId();
        this.comment = [];
    }

    addComment(comment){
        (this.comment).push(comment);
    }
}

class Comment{
    constructor(user, rating, text){
        this.user = user;
        this.rating = rating;
        this.text = text;
    }
}

// const user1 = new User("Ghazanfar");
// const user2 = new User("Heshmat");


// const product1 = new Product("چنگال", "تومن 100", "لوازم آشپزخانه");
// const product2 = new Product("قاشق", "تومن 50", "لوازم آشپزخانه");
// const product3 = new Product("موس", "2 میلیون", "لوازم جانبی کامپیوتر");

// const comment1 = new Comment("Heshmat", 0, "با موس اش حال نکردم خیلی داغون بود");

module.exports = {
    User,
    Product,
    Comment
}