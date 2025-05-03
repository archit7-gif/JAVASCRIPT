


// class Liberary{
//     constructor(){
//     this.books = []}

//     addBooks(books){
//     this.books.push(...books) }

//     listAllBooks(){
//     this.books.forEach(function(book){
//     console.log(book.name)})}

// }


// class Book{
//     constructor(name,price,author){
//     this.name = name;
//     this.price = price;
//     this.author = author;
//     this.readStatus = false;
//     }

//     info(){
//     console.log(`${this.name} is written by ${this.author} is avilable at Amazon at price of ${this.price} and you have ${this.readStatus ? "Read it" : "You Have not read it"} ${this.readStatus ? "✅" : "❌"}`)
//     }

//     changeReadStatus(){
//     this.readStatus = !this.readStatus
//     }
// }


// let jhansiLibrary = new Liberary()

// let Book_1 = new Book("Godan",300,"Munshi Premchand")
// let Book_2 = new Book("Siddarth",300,"Herman Hess")
// let Book_3 = new Book("Stree",300,"Archrya Prashant")

// jhansiLibrary.addBooks([Book_1,Book_2,Book_3]);










// Mobile wala

class mobileShop{
    constructor(){
    this.mobile = []; }

    addMobile(mobile){
        this.mobile.push(mobile)
    }
    listAllMobiles(){
    this.mobile.forEach(function(mb,index){
    console.log(`${index + 1} ${mb.brand}- ${mb.model} -${mbb.color}- ${mb.price}`)})
}
}

class Mobile{
    constructor(brand,model,price,color){
    this.id = Math.floor(Math.random() * 100000);
    this.model = model;
    this.color = color;
    this.brand = brand;
    this.price = price
    this.sims = [] }

    getMobileInfo(){
    console.log(`${this.brand} -${this.model} = ${this.price} - ${this.color} `)}

    insertSim(sim){
    if(this.sims.length === 2){
    console.log("u already has 2 sim installed")
    return;}
    this.sims.push(sim)
    }
}


class Sim{
    constructor(brand,balance){
        this.brand = brand;
        this.balance = balance;
    }

    addBalance(balance){
        if(balance < 0 ){
            console.log("greater than 0 amount do");
            return;
        }
        this.balance += balance;
    }
}


let MyMobileShop = new mobileShop();
let Samsung = new Mobile("samsung","s25 ultra",5000,"black")
let Airtel = new Sim("Airtel",300)

Samsung.insertSim(Airtel);
MyMobileShop.addMobile(Samsung)



























// let jhansiLibrary = new Liberary()
// let bhopalLibrary = new Liberary()

// jhansiLibrary.addBook("godan")
// jhansiLibrary.addBook("paisa hi sehat hai")
// jhansiLibrary.addBook("rich dad poor dad")

// bhopalLibrary.addBook("godan")
// bhopalLibrary.addBook("Do epic Shit")

// jhansiLibrary.listAllBooks()
// bhopalLibrary.listAllBooks()