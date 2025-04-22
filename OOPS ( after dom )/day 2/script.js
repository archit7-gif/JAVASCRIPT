

// function Toffee(name){
//     this.name = name;
//     this.price = 10;

// }

// let t1 = new Toffee("alpinlibe")
// let t2 = new Toffee("dairy milk")

// console.log(t1,t2)







// jab sabka price ek hi hai to use ek k through



// function Toffee(name){
//     this.name = name;}

// Toffee.prototype.price=5

// let t1 = new Toffee("alpinlibe")
// let t2 = new Toffee("dairy milk")

// console.log(t1,t2)









// function Human(hasHand,age,name){
//     this.hasHand = hasHand;
//     this.age = age;
//     this.name = name; }

// Human.prototype.sayHello = function(){
//     console.log("hello")}

// let h1 = new Human("archit",25,true)
// console.log(h1)












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





function Employee(name,age,id){
    this.name =  name;
    this.age = age;
    this.id = id
}


Employee.prototype.printDetails = function(){
    console.log(`my name is ${this.name} and iam ${this.age} old and this ${this.id} is my id`)
}

let e1 = new Employee("archit",26,12345)
let e2 = new Employee("suraj",24,123)
// console.log(e1,e2)
e1.printDetails()