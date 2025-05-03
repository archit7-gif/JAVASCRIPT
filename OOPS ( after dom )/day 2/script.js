

// function Toffee(name){
//     this.name = name;
//     this.price = 10;

// }

// let t1 = new Toffee("alpinlibe")
// let t2 = new Toffee("dairy milk")

// console.log(t1,t2)




// jab bhi koi ek property jo sabme same hai , like kai sari toffe hai but 
// sabka price lets say 10 hai to unhe individually price dena shi nhi hai,
// rather we will give prce in protottpes to vo sabme share ho jyega


// function Toffee(name){
//     this.name = name;
//     this.price = 10
// }

// let t1 = new Toffee("alpinlibe")
// let t2 = new Toffee("dairy milk")
// console.log(t1,t2)




// instead of this we do the below part



// function Toffee(name){
//     this.name = name;}

// Toffee.prototype.price=5

// let t1 = new Toffee("alpinlibe")
// let t2 = new Toffee("dairy milk")
// console.log(t1,t2)







// normal method

// function Human(hasHand,age,name){
//     this.hasHand = hasHand;
//     this.age = age;
//     this.name = name; 
//     this.sayHelllo = function(){
//     console.log("hello")
//    }

//}

// let h1 = new Human(true,25,"archit")
// let h2 = new Human(true,22,"sumit")
// let h3 = new Human(false,22,"rohit")

// h2.sayHello()




// prototype method ( better if there is some shared property)


// function Human(hasHand,age,name){
//     this.hasHand = hasHand;
//     this.age = age;
//     this.name = name; }

// Human.prototype.sayHello = function(){
//     console.log(`hello from ${this.name} and my age is ${this.age}`)}

// let h1 = new Human(true,25,"archit")
// let h2 = new Human(true,22,"sumit")
// let h3 = new Human(false,22,"rohit")

// h2.sayHello()







// sabse pehle property ko apne object mein dhudenge nahi mila 
// to protype mein dhudenge

// function Toffee(name){
//     this.name = name;
//     // this.price = 10;
// }

// Toffee.prototype.price = 10;
// let t1 = new Toffee ("kachha aam")




// function Toffee(name,price){
//     this.name = "&234"+name;
//     this.price = price;
//     this.printMyName = function(){
//         console.log(name) //"kachha aam"
//         console.log(this.name) // " &234kachha aam"
//     }
//     this.printMyPrcice = function(){
//         console.log(price)
//     }
// }

// let t1 = new Toffee ("kachha aam",2)
// let t2 = new Toffee("mango bite", 4)

// console.log(t1.printMyName)






// function Employee(name,age,id){
//     this.name =  name;
//     this.age = age;
//     this.id = id
// }


// Employee.prototype.printDetails = function(){
//     console.log(`my name is ${this.name} and iam ${this.age} old and this ${this.id} is my id`)
// }

// let e1 = new Employee("archit",26,12345)
// let e2 = new Employee("suraj",24,123)
// // console.log(e1,e2)
// e1.printDetails()

















