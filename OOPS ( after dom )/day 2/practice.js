




// questions 

//1 Creating Objects Using Constructor Functions Write a constructor function called Car that creates an object with make, model, and year properties. Instantiate a Car object and log its properties.


// class Car{
//     constructor(make,model,year){
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }
// }

// Car.prototype.getInfo = function(){
//     console.log(`${this.make} ${this.model} ${this.year}`)
// }
// let Car1 = new Car("toyata","first",2025)
// let Car2 = new Car("suzuki","sexond",2022)


// Car2.getInfo()



// Using this Inside a Constructor Function Write a constructor function called Person that takes name and age as parameters. Inside the constructor, use this to assign values to the object's properties. Create an instance and log the object.


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age; }
// }

// Person.prototype.details= function(){
//     console.log(`${this.name} ${this.age}`)
// }

// let p1 = new Person("archit",25)
// let p2 = new Person("suraj",20)

// console.log(p2.age)






// Q3: Fan Class
// Class Fan banao with properties:

// brand, speed, price
// Aur ek method ho increaseSpeed() jo speed + 1 kare.


// class Fan {
//     constructor(brand, speed, price) {
//     this.brand = brand;
//     this.speed = speed;
//     this.price = price;
//     this.increaseSpeed = function(){
//     this.speed = this.speed + 1;
//     return this.speed; }

// }
// }
// let OnlyFan = new Fan("Orient", 5, 2000);

// console.log(OnlyFan.increaseSpeed())
// console.log(OnlyFan.increaseSpeed())
// console.log(OnlyFan.increaseSpeed())



// 4 : Methods Inside Constructor Functions Create a Book constructor function that accepts title, author, and price as parameters. Add a method to Book that logs a message like "The book 'title' by author costs price." for any instance of Book.


// class Book{
//     constructor(title,author,price){
//     this.title = title;
//     this.author = author;
//     this.price = price;
//     }
// }

// Book.prototype.details = function(){
//     // console.log(`The book ${this.title} by ${this.author} costs ${this.price}.`)
//     console.log(this.price = 10);
// }


// let B1 = new Book("motivation","sandeep",500)
// let B2 = new Book("sprituality","OSHO",800)
// let B3 = new Book("SELF HELP","ravi",300)

// console.log(B1)
// B1.details()




// 4 Using Prototypes to Add Methods Create a constructor function Animal that accepts name and species. Add a method to the prototype of Animal that logs a sentence like "The animal is a [species] named [name]." Test this with a few instances.

// class animal{
//     constructor(name,species){
//     this.name = name;
//     this.species = species;
//     }

//     methods(){
//         console.log(`The animal is a ${this.species} named ${this.name}.`)
//     }
// }

// let a1= new animal("bhalu","beer")
// let a2= new animal("sheru","sher")

// a1.methods()
// a2.methods()



// 6 Defining Methods Using Classes Convert the Animal constructor function (from the previous example) into a class. Ensure that the class has a method that logs the species and name of the animal.

// class Convert{
//     constructor(){

//     }
// }



// 7 Object Prototypes and Shared Properties Define a constructor function Car with make, model, and year properties. Add a method to the prototype of Car that prints the full description of the car (e.g., make model year). Then, create multiple instances of Car and test the method.

// class car{
//     constructor(Make,model,yearProperties){
//     this.Make = Make;
//     this.model = model;
//     this.yearProperties = yearProperties
//     }
//     details(){
//         console.log(`${this.Make} ${this.model} ${this.yearProperties}`)
//     }
// }

// let c1 = new car("alto","top model",2020)
// let c2 = new car("punch","top model",2024)
// let c3 = new car("Fortuner","base model",2023)

// c1.details()
// c2.details()
// c3.details()






// ✅ Q1: Conditional Update — BankAccount
// 🧾 Task: Create a class with owner, balance. Method withdraw(amount) only works if there's enough balance.

// 💡 Hint:

// Inside withdraw, use an if condition to check if this.balance >= amount.

// If true, subtract and return the new balance.

// If false, return a message like "Insufficient funds".

// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     }
//     withdraw(amount) {
//         if (this.balance >= amount) {
//             this.balance -= amount;  
//             return `Withdrawal successful. New balance: ${this.balance}`;
//         } else {return "Insufficient funds";}
//     }
// }
// let ba1 = new BankAccount("Archit", 5000);
// let ba2 = new BankAccount("paro", 50000);
// let ba3 = new BankAccount("Ankit", 500);

// console.log(ba1.withdraw(500));  
// console.log(ba1.withdraw(500)); 



// ✅ Q2: Student — Loop and Array Logic
// What you're building:
// A class that keeps track of a student and their exam scores.

// Properties:
// name: the student’s name
// grades: an array like [80, 90, 70]

// Method to add:
// getAverage(): Add all grades and divide by the number of grades → return the average.

// Why it’s different:
// Now you’re using arrays + loops or .reduce() inside class methods, which is more like real data handling.


// class Student {
//     constructor(name, grades) {
//         this.name = name;
//         this.grades = grades;
//     }

//     getAverage() {
//         if (this.grades.length === 0) {return 0;}
//         let total = 0;
//         for (let i = 0; i < this.grades.length; i++) {total += this.grades[i];}

//         let average = total / this.grades.length; return average;
//     }
// }


// let s1 = new Student("Archit", [80, 90, 100]);
// let s2 = new Student("Ankit", [70, 75, 65]);
// let s3 = new Student("Nikhat", [88, 92, 85, 91]);

// console.log(s1.getAverage()); 
// console.log(s2.getAverage()); 
// console.log(s3.getAverage()); 







// ✅ Q3: BookShelf — Dynamic Object Handling

// What you're building:
// A class that works like a book collection.

// Properties:
// books: an empty array at start — will store book objects

// Methods to add:
// addBook(title, author): Push an object {title, author} into the books array
// findBook(title): Search through books and return the object with matching title

// Why it’s different:
// You’re working with an array of objects — this is next-level logic that deals with storing and retrieving custom data.





// ✅ Q4: UserSession — Toggling State
// What you're building:
// A class that manages a user’s online status.

// Properties:
// username: the name of the user

// isLoggedIn: starts as false

// Methods to add:
// login() → sets isLoggedIn = true
// logout() → sets isLoggedIn = false
// status() → returns "Online" or "Offline" based on current value of isLoggedIn

// Why it’s different:
// This shows how you can use boolean properties to manage state — a simple ON/OFF system inside an object.





// ✅ Q5: Thermostat — Validating Input Inside Methods
// What you're building:
// A class that controls temperature in a safe range.

// Properties:
// temperature

// Methods to add:
// setTemperature(value) → only set the value if it’s between 16 and 30
// getTemperature() → just return the value of temperature

// Why it’s different:
// Now your method validates user input before saving it — which is a basic form of error-proofing in apps.

