


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

// class mobileShop{
//     constructor(){
//     this.mobile = []; }

//     addMobile(mobile){
//         this.mobile.push(mobile)
//     }
//     listAllMobiles(){
//     this.mobile.forEach(function(mb,index){
//     console.log(`${index + 1} ${mb.brand}- ${mb.model} -${mbb.color}- ${mb.price}`)})
// }
// }

// class Mobile{
//     constructor(brand,model,price,color){
//     this.id = Math.floor(Math.random() * 100000);
//     this.model = model;
//     this.color = color;
//     this.brand = brand;
//     this.price = price
//     this.sims = [] }

//     getMobileInfo(){
//     console.log(`${this.brand} -${this.model} = ${this.price} - ${this.color} `)}

//     insertSim(sim){
//     if(this.sims.length === 2){
//     console.log("u already has 2 sim installed")
//     return;}
//     this.sims.push(sim)
//     }
// }


// class Sim{
//     constructor(brand,balance){
//         this.brand = brand;
//         this.balance = balance;
//     }

//     addBalance(balance){
//         if(balance < 0 ){
//             console.log("greater than 0 amount do");
//             return;
//         }
//         this.balance += balance;
//     }
// }


// let MyMobileShop = new mobileShop();
// let Samsung = new Mobile("samsung","s25 ultra",5000,"black")
// let Airtel = new Sim("Airtel",300)

// Samsung.insertSim(Airtel);
// MyMobileShop.addMobile(Samsung)














// let jhansiLibrary = new Liberary()
// let bhopalLibrary = new Liberary()

// jhansiLibrary.addBook("godan")
// jhansiLibrary.addBook("paisa hi sehat hai")
// jhansiLibrary.addBook("rich dad poor dad")

// bhopalLibrary.addBook("godan")
// bhopalLibrary.addBook("Do epic Shit")

// jhansiLibrary.listAllBooks()
// bhopalLibrary.listAllBooks()

























// libraray 

class Liberary{
    constructor(){
    this.books = []; // records sari book ka
    }

    addBooks(books){  // add krne wala method
    this.books.push(...books)
    }

    listAllBooks(){
    this.books.forEach(function(book){ // har bar ek book milegi jo hamne accept kri hai parameter mai
    console.log(book.name) // aur usko print kr diya hai fir
    })
    }
}

// book ki details

class Book{
    constructor(name,id,author,price){
    this.name = name;
    this.id =id;
    this.author =author;
    this.price =price;
    this.readStatus = false;
    }

    info(){
    console.log(`${this.name} is written by ${this.author} is avilable at price ${this.price} and u have ${this.readStatus ? "read it":"not read this book "} `)
    }

    changeReadStatus(){
    this.readStatus = !this.readStatus
    }
}


// yeh to sari books hi hai with details , ab hame dicide karna hai kausi kaha jyegi

let B1 = new Book("Stree", 15, "Acharya Prashant", 500);
let B2 = new Book("Siddhartha", 12, "Hermann Hesse", 300);
let B3 = new Book("The Prophet", 10, "Kahlil Gibran", 250);
let B4 = new Book("Ikigai", 8, "Francesc Miralles", 280);
let B5 = new Book("The Power of Now", 20, "Eckhart Tolle", 350);
let B6 = new Book("Bhagavad Gita", 18, "Ved Vyasa", 400);
let B7 = new Book("The Book of Secrets", 14, "Osho", 600);
let B8 = new Book("Tao Te Ching", 9, "Lao Tzu", 200);
let B9 = new Book("The Untethered Soul", 16, "Michael A. Singer", 370);
let B10 = new Book("Man’s Search for Meaning", 11, "Viktor Frankl", 330);



//adding books to liberrary

let jhansiLibrary = new Liberary() //new liberary add krdi jhansi k naam se
// jhansiLibrary.addBook("Atomic Habits") // jhansi liberary mai book add krdi manually

jhansiLibrary.addBooks([B1,B2,B3,B4,B5])  // jo b1 book thi usko liberary mai daal diya
jhansiLibrary.listAllBooks() // jhansi ki sari books ajayngi



let bhopalLibrary = new Liberary() // bhopal ki bhi ek liberary create hogyi
// bhopalLibrary.addBook("Off Human Bondages") // bhopal liberary mai add hue hai sirf yeh book

bhopalLibrary.addBooks([B2,B6,B3])
bhopalLibrary.listAllBooks() // bhopal ki sari books ajayngi