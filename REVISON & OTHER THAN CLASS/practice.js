

// 1 Basic Function Call
// Write a function greet that prints "Hello, World!" when called.
// Hint: Use console.log() inside the function.


// function greet(){
//     console.log("helllo world")
// }
// greet();




// 2 Function with Parameters
// Write a function greetUser that takes a name as a parameter and prints "Hello, [name]!".
// Hint: Use template literals (Hello, ${name}!).


// function greetUser(name){
//    console.log(`hello ${name}`)
// }
// greetUser("archit")






// 3 Function Returning Value
// Create a function add that takes two numbers as arguments and returns their sum.
// Hint: Use return instead of console.log().


// function sum(a,b){
//     return a + b
// }
// let res = sum(1,5)
// console.log(res)



// 4  Function Expression
// Convert the add function into a function expression.
// Hint: Store the function inside a variable.


// let sum = function (a,b){
//     return a + b
// }
// let res = sum(1,5)
// console.log(res)





// 5 Arrow Function
// Rewrite the add function as an arrow function.
// Hint: Use => syntax.


// let sum = (a,b)=>a+b

// let res = sum(2,3)
// console.log(res)








// 6 Implicit Return in Arrow Function
// Write an arrow function multiply that takes two numbers and returns their product in one line.
// Hint: Remove {} and return for implicit return.

// multiply = (a,b)=>a*b; console.log(multiply(2,4))









// 7 Default Parameters
// Create a function power that takes a number and an exponent (default to 2) and returns the power.
// Hint: Use default parameters in function definition.


// function power(num, exp = 2) {
//     return num ** exp; // Ya Math.pow(num, exp) bhi use kar sakte ho
// }

// console.log(power(3));    // 3^2 = 9
// console.log(power(2, 3)); // 2^3 = 8
// console.log(power(5, 4)); // 5^4 = 625







// 8  Function Hoisting
// Write a function normally and call it before declaring it to see hoisting in action.
// Hint: Function declarations are hoisted, but function expressions are not.


// normally()

// function normally(){
//     console.log("helllo")
// }

// funcion decleration


// normally()

// let normally = function(){
//     console.log("helllo")
// }

// function expression









// 9  Higher-Order Function (HOF) - 1
// Write a function operate that takes two numbers and a function as parameters. The function should apply the given function to the numbers.
// Hint: The third parameter should be a function like add or multiply.


// function abc(a,b,f){
//    console.log(f(a,b))
// }

// abc(1,2,function(){
//     return 12*5
// })




// divyansu se poochna

// 10  Callback Function
// Modify operate so that it calls the provided function inside it.
// Hint: Use fn(a, b) inside operate.



// function operate(a,b,f){
//     return f(a,b) }

// var ans =operate(5,10,function add(x,y){
//     return x+y })

// console.log(ans)












//  Task Completion Message
// 👉 Ek function processTask likh jo task ka naam aur ek callback function le. Pehle task ka naam print kare, phir callback function se "Task Completed!" print ho.

//  function processTask(naam,callbackFunction){
//     console.log(naam)
//     callbackFunction()
//  }

//  processTask("Task ka naa",function(){
//    console.log("task completed")
//  })






// User Login System
// 👉 Ek function authenticateUser likh jo username aur ek callback function le. Pehle "Verifying user: username" print kare, phir callback function se "User logged in successfully!" print ho.



// function authenticateUser(username,callbackFunction){
//  console.log("verifying user :", username)
//  callbackFunction()
// }


// authenticateUser("archit",function(){
//     console.log("User logged in successfully!")
// })








// Payment Processing
// 👉 Ek function processPayment likh jo amount aur ek callback function le. Pehle "Processing payment of ₹amount" print kare, phir callback function se "Payment Successful!" print ho.

// set time out bhi esme

//   function processPayment(amount,callbackFunction){
//   console.log(`Processing payment of ₹${amount}`); callbackFunction()}

//   processPayment(1500,function(){
//   console.log("Payment Successful!"); })






// Order Delivery System
// 👉 Ek function deliverOrder likh jo order ID aur ek callback function le. Pehle "Order #ID is out for delivery" print kare, phir callback function se "Order Delivered!" print ho.



// function deliverOrder(orderID , fn){
//     console.log(`Order #ID ${orderID} is out for delivery`);
//     fn()
// }
// deliverOrder(125, function(){
//     console.log("Order Delivered!")
// })






// Exam Result Checker
// 👉 Ek function checkResult likh jo marks aur ek callback function le. Pehle "You scored: marks" print kare, phir callback function se "Pass/Fail" print ho (pass agar marks >= 40).



//  function checkResult(marks,cbf){
//   console.log(`you scored : ${marks}`)
//   cbf(marks) }

//  checkResult(50,function(kuchbhi){
//     if(kuchbhi >= 40)console.log("pass");else{console.log("fail")}})
















// 👉 Ek function applyDiscount likho jo ek price aur ek callback function le. Pehle "Original price: ₹price" print kare, phir callback function se discount lagaye aur "Final price after discount: ₹amount" print kare.

// Hint: Callback function discount ka percentage le sakta hai. Discount price ka calculation price - 
// (price * discount / 100) ke jaisa ho sakta hai.




// function applyDiscount(price,fn){
//   console.log(`Original price: ₹${price}`)
//   fn(price)
// }
// applyDiscount(1000, function(lavda){
//    let finalamount = lavda - (lavda * 10 / 100)
//    console.log(finalamount)
// })







// 2️⃣ Voting Eligibility Checker
// 👉 Ek function checkEligibility likho jo ek age aur ek callback function le. Pehle "Your age: age" print kare, phir callback function se check kare ki age 18 ya usse zyada hai ya nahi.

// Hint: Callback function age ko receive kare aur "Eligible to vote" ya "Not eligible" print kare.




//  function checkEligibility(age,f){
//   console.log(`your age: ${age}`);
//   f(age);}

//  checkEligibility(19,function(umar){
//   if(umar >= 18){console.log("Eligible to vote")}
//   else{console.log("Not eligible to vote")}})






// 3️⃣ Simple Interest Calculator
// 👉 Ek function calculateInterest likho jo principal, rate aur ek callback function le. Pehle "Calculating interest for ₹principal at rate% per year" print kare, phir callback function se interest calculate kare aur "Total amount after interest: ₹amount" print kare.

// Hint: Interest ka formula P * R * T / 100 hota hai (maan lo T = 1). Callback function interest return kare.



// function calculateInterest(principal,rate,func){
// console.log(`Calculating interest for ₹ ${principal} at ${rate}% per year`);
// console.log(`intrest etna hai`,func(principal,rate))} 

// calculateInterest(10,5,function(p,r){
// return (p*r*1)/100 })





// 4️⃣ Password Validator
// 👉 Ek function validatePassword likho jo ek password aur ek callback function le. Pehle "Validating password..." print kare, phir callback function se check kare ki password length 8 se zyada hai ya nahi.

// Hint: Callback function password length check kare aur "Strong password" ya "Weak password" return kare.


//   function validatePassword(pass,func){
//     console.log(`Validating password...`);
//     func(pass);
    
//   }
//   validatePassword(`12345678`,function(password){
//     if(password.length>=8){console.log("Strong password")}
//     else{console.log("weak password")}
//   })





// 5️⃣ Temperature Converter
// 👉 Ek function convertTemperature likho jo ek temperature aur ek callback function le. Pehle "Converting temperature: temperature°C" print kare, phir callback function temperature ko Fahrenheit ya Kelvin me convert kare.

// Hint:

// Celsius to Fahrenheit: (temp * 9/5) + 32
// Celsius to Kelvin: temp + 273.15
// Callback function se conversion type select ho sakta hai.



//  function convertTemperature(temp,cf1,cf2){
//     let fahrenheit = cf1(temp);
//     let kelvin = cf2(temp);
//   console.log(`Converting temperature: ${temp}°C into Fahrenheit is ${fahrenheit} °F & Kelvin is ${ kelvinK`);}

//  convertTemperature(90,function(temperature){
//  return (temperature * 9/5) + 32},function(temperature){return (temperature + 273)})


















// 1️⃣ Currency Converter
// 👉 Ek function convertCurrency likh jo amount, ek callback function toUSD, aur ek callback function toEUR le. Pehle "Converting ₹amount to USD & EUR" print kare, phir converted values print kare.

// 💡 Hint:

// 1 INR = 0.012 USD
// 1 INR = 0.011 EUR
// toUSD(amount) aur toEUR(amount) wale callbacks likhne hain jo INR se USD/EUR convert karein.




// function convertCurrency(amount,toUSD,toEUR){
// let usd = toUSD(amount);
// let eur = toEUR(amount);
// console.log(`Converting ₹amount${amount} to USD${usd} & EU ${eur}`)}

// convertCurrency(100,function(rupeetoUSD){return (rupeetoUSD * 0.012)},
// function(rupeetoEUR){return (rupeetoEUR * 0.011)})








// 2️⃣ Student Grade Calculator
// 👉 Ek function calculateGrade likh jo marks, ek callback function findPercentage, aur ek callback function findGrade le. Pehle "Calculating result for marks: marks" print kare, phir percentage aur grade print kare.

// 💡 Hint:

// findPercentage(marks) marks ka percentage return kare (assume total 500).
// findGrade(percentage) A/B/C/D/F return kare. Example:
// 90+ → A
// 75-89 → B
// 60-74 → C
// 40-59 → D
// <40 → F






// function calculateGrade(marks,findPercentage,findGrade){
// let percentagee = findPercentage(marks);
// let grade = findGrade(marks);
// console.log(`Calculating result for marks: ${marks} the percentage is ${percentagee}% and Grade is ${grade}`)} 


// calculateGrade(80,function(Percentage){
// return (Percentage / 100) * 100},

// function(marks,grade){ // its calculated for per subject
// if(marks>=90){return grade = "A"}
// else if(marks >= 75 && marks <90){return grade = "B"}
// else if(marks >= 60 && marks <75){return grade = "C"}
// else if(marks >= 40 && marks <60){return grade = "D"}
// else if(marks<40){return grade = "F"} })








// 3️⃣ Discount Calculator
// 👉 Ek function calculateDiscount likh jo price, ek callback function apply10Percent, aur ek callback function apply20Percent le. Pehle "Applying discount on ₹price" print kare, phir discounted prices print kare.

// 💡 Hint:

// apply10Percent(price) 10% discount apply kare.
// apply20Percent(price) 20% discount apply kare.
// Example: ₹1000 par 10% = ₹900, 20% = ₹800.




// function calculateDiscount(price,apply10Percent,apply20Percent){
// let tenPercent = apply10Percent(price); let twentyPercent = apply20Percent(price);
// console.log(`Applying discount on ₹ ${price},and amount afer 10% and 20% discount Respectively is ${tenPercent} & ${twentyPercent}`)}


// calculateDiscount(1000,function(amount){ return amount-(amount * 0.1)}, function(amount){return amount-(amount * 0.2)})





// 4️⃣ Body Mass Index (BMI) Calculator
// 👉 Ek function calculateBMI likh jo weight (kg), height (m), ek callback function findBMI, aur ek callback function checkHealthStatus le. Pehle "Calculating BMI for weight kg & height m" print kare, phir BMI aur health status print kare.

// 💡 Hint:

// findBMI(weight, height) BMI formula: weight / (height * height)
// checkHealthStatus(bmi)
// BMI <18.5 → "Underweight"
// BMI 18.5-24.9 → "Healthy"
// BMI 25-29.9 → "Overweight"
// BMI 30+ → "Obese"




// function calculateBMI(weight,height,findBMI,checkHealthStatus){
// let BMI = findBMI(weight,height);
// let health = checkHealthStatus(BMI)

// console.log(`Calculating BMI for Weight ${weight} kg & Height ${height.toFixed(2)}m is : ${BMI.toFixed(2)} and health status is : ${health} `)}


// calculateBMI(76 , 6 * 0.3048,
// function(weight,height){
// return weight / (height*height);},
    
// function(BMI){
// if(BMI<18.5){return "Underweight"}
// else if (BMI >= 18.5 &&  BMI < 25 ){return "Healthy"}
// else if (BMI >= 25 &&  BMI < 30 ){return "OverWeight"}
// else if (BMI >= 30){return "Obese"} })




  




// 5️⃣ Trip Distance Converter
// 👉 Ek function convertDistance likh jo distance (km), ek callback function toMiles, aur ek callback function toMeters le. Pehle "Converting distance: distance km" print kare, phir miles aur meters print kare.

// 💡 Hint:

// toMiles(distance) → 1 km = 0.621 miles
// toMeters(distance) → 1 km = 1000 meters



// function convertDistance(distance,toMiles,toMeters){
// let miles = toMiles(distance);
// let meters = toMeters(distance);
// console.log(`Converting distance: ${distance} km to miles is ${miles.toFixed(2)} miles and ${meters} meters`)}

// convertDistance(6.5,function(distanceInKm,){return (distanceInKm)/1.609344;},

// function(distanceInKm){return (distanceInKm)*1000;})











// Function Returning Another Function – Practice Questions



// Question 1:
// Write a function greet that accepts a name and returns another function. When the returned function is invoked, it should print "Hello, <name>!".

// Hint:
// Use a closure to capture the provided name.


// function greet(name){
// return ()=> console.log(`Hello ${name}`)};

// greet("archit Gand faad dee ")()






// 2. Multiplier Function
// Question:
// Create a function multiplyBy that takes a number (factor) and returns a new function. The returned function should accept a number and return the product of that number and the given factor.

// Hint:
// For example, multiplyBy(5) should return a function that multiplies its argument by 5.



// function multiplyBy(factor){ return (Number)=> factor * Number }

// let ans = multiplyBy(7)(5);
// console.log(" the ans is ",ans)




// 3. Power Function
// Question:
// Build a function powerOf that accepts an exponent and returns a new function. When this new function is called with a base, it returns the base raised to that exponent.

// Hint:
// For instance, powerOf(2)(3) should return 8 (because 2³ = 8).



// function powerOf(base){
//     // return (power)=> base ** power;   // or
//     return (power) => Math.pow(base , power)
// }

// let ans = powerOf(2)(6)
// console.log(ans)

 




// 4. Counter with Closure
// Question:
// Write a function counter that returns a function. Each time the returned function is called, it should increment an internal counter and print its value.

// Hint:
// Use a variable inside counter to store the count.



// function counter(){
//     let count = 0
//     return () =>  console.log(++count)
// }

// let ans = counter()
// ans()
// ans()
// ans()








// 5. Full Name Builder
// Question:
// Create a function getFullName that takes a first name and returns a function. The returned function should accept a last name and return the full name by concatenating the first and last names with a space.

// Hint:
// For example, getFullName("Rahul")("Sharma") should return "Rahul Sharma".




// function getFullName(firstname){
//     return (lastname)=>`${firstname} ${lastname}`
// }
// let naam = getFullName("archit")("pandey")
// console.log(naam)


 
 




// 6. Adder Function
// Question:
// Write a function createAdder that takes a number and returns a function. The returned function, when called with another number, returns the sum of the two numbers.

// Hint:
// For example, createAdder(10)(5) should return 15.




// function createAdder(num1){
//     return (num2)=> num1 + num2;
// }

//  console.log(createAdder(10)(5))
//  console.log(createAdder(17)(4))
//  console.log(createAdder(12)(57))
//  console.log(createAdder(14)(9))







// 7. Operation Function
// Question:
// Build a function operation that accepts an operator as a string (like "+", "-", "*", or "/") and returns a new function. The returned function should take two numbers and perform the specified operation on them.

// Hint:
// Use conditional logic inside the returned function to decide which arithmetic operation to perform. For example, operation('+')(4,5) should return 9.



// function operation(operator){
//     return (a,b) => {
//     if(operator === "+"){
//     return a + b
//     }
//     else if(operator === "-"){
//     return a - b    
//     }
//     else if(operator === "*"){
//     return a * b    
//     }
//     else if(operator === "/"){
//     return a / b    
//     }
// }
// }

// let ans = operation("*")(4,5)
// console.log(ans)









// 8. Multiplication Table Generator
// Question:
// Write a function generateMultiplier that accepts a number and returns a new function. When the returned function is invoked (with no arguments), it should print the multiplication table of that number (e.g., from number × 1 up to number × 10).

// Hint:
// Use a loop inside the returned function to generate and print the table.


// function generateMultiplier(num){
//     return ()=> { for(i=1; i<=10 ; i++)
//     { console.log(num * i)} }
// }

// generateMultiplier(5)()








// 9. Custom Message Creator
// Question:
// Create a function createMessage that takes a greeting (for example, "Hello" or "Good Morning") and returns a new function. The returned function should accept a name and return a complete greeting message.

// Hint:
// For example, createMessage("Hello")("Amit") should return "Hello Amit".



// function createMessage(greeting){
//   return (name)=>  console.log(`${greeting} ${name}`)
// }

// createMessage("helllo")("architttt")







// 10. Currency Converter
// Question:
// Write a function currencyConverter that takes an exchange rate and returns a new function. The returned function should accept an amount and convert it using the given exchange rate.

// Hint:
// For example, currencyConverter(0.013)(1000) should return the converted amount (i.e., 13 if the rate is from INR to USD).


// function currencyConverter(currency){
//     return (AmountToBeConverted)=>{
//         if(currency === "$"){
//             return AmountToBeConverted * 86
//         }
//         else if(currency === "&"){     // & = euro here 
//             return AmountToBeConverted * 92.74
//         }
//         else if(currency === "@"){     // @ = rupees here 
//         return AmountToBeConverted / 86
//     }   }
// }

// console.log(currencyConverter("@")(1))    // amount in rupees enter here 

















// let x =5;  // 54321
// while(x){
//     console.log(x);
//     x--
    
// }

// let x = 1;

// while(true){
//     console.log(x);
//     x++;
//     if (x>3) break
// }






// khusd se or 1 se divisoble 

// 2,3,5,7,11,13,17,19  and so on



// function isPrime(n){
// let isPrime = true;
// if(n<=1){
// isPrime = false;}

// for(let i =2 ; i< n ; i++){
// if(n % i == 0){isPrime = false
// break
// }}
// return isPrime
// }

// let ans = isPrime(17)
// console.log(ans)






// function primeNumber(n){
//     let arr = []
//     for(let i = 1 ; i<= n ; i++){
//     if(isPrime(i)){
//     arr.push(i)}
//     }
//     return arr
// }

// let ans2 = primeNumber(10)
// console.log(ans2)







// Steps in Simple Words:
// Ek array banao dp[], jo Fibonacci values store karega.

// dp[0] = 0 aur dp[1] = 1 set karo.

// Ek loop chalao jo dp[i] = dp[i-1] + dp[i-2] formula use karke values fill karega.

// Jab loop khatam ho, dp[n] return kar do.


 




// function  Fibonacci (arr){
// arr[0] =1
// arr[1] =2
// for(let i = 0 ; i<=arr.length ; i++){
// arr[i] = arr[i-1] + arr[i-2]
// }
// return arr
// }

// Fibonacci( [1,2,3,4,5,5,6,7,8,9,10])



// function gcd(a, b) {
//     if (b === 0) return a;
//     return gcd(b, a % b);
//   }

// var ans = gcd(10,7)
// console.log(ans)












// 🟢 1. **Variables and Data Types**
// **Q1.** Declare a variable to store your name and another to store your age. Then log a sentence like: `"My name is John and I am 25 years old."`

// **Hint:** Use `let` or `const`, and string concatenation or template literals.


// let naam = "archit";
// let age = 24;

// console.log(`my nname is ${naam} and iam ${age} years old`)



// ### 🟢 2. **Operators**
// **Q2.** If `x = 10` and `y = 5`, what will be the output of `x % y + x * y - y`?

// **Hint:** Remember BODMAS (operator precedence). `%` is modulus.


// let x = 10;
// let y = 5;
// console.log(x%y+x*y-y)



// ### 🟢 3. **Conditional Statements**
// **Q3.** Write a program that checks whether a number is positive, negative, or zero.

// **Hint:** Use `if...else if...else`.


// let num = -1
// if(num >= 0){console.log("positive")}
// else{console.log("negative")}



// ### 🟢 4. **Logical Operators**
// **Q4.** Write a condition to check if a number is between 10 and 20 (inclusive).

// **Hint:** Use logical `&&` operator like `num >= 10 && num <= 20`.


// let num = 15;
// if(num>=10 || num <=20){
//     console.log("yessss")
// }else{console.log("noo")}



// ### 🟢 5. **Truthy and Falsy**
// **Q5.** What will be the output of this code?
// ```js

// let value = -1;
// if (value) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// ```

// **Hint:** Know the falsy values in JS: `0`, `""`, `null`, `undefined`, `NaN`, and `false`.








// ### 🟢 6. **Switch Statement**
// **Q6.** Write a `switch` statement that prints the name of the day (e.g., "Monday") when given a number from 1 to 7.

// **Hint:** `case` statements don't auto-break—add `break` after each case.






// ### 🟢 7. **Loops (for, while, do-while)**
// **Q7.** Write a `for` loop that prints all even numbers from 1 to 20.

// **Hint:** Use `i % 2 === 0` to check even numbers.


// for(let i =1; i<=20 ; i++){
//     console.log(i)
// }


// **Q8.** Use a `while` loop to count down from 10 to 1.

// **Hint:** Initialize the counter before the loop, then decrement inside.

// let count = 10
// while(count >= 1){
//     console.log(count);
//     count--;
// }





// ### 🟢 8. **String Methods**
// **Q9.** Given the string `" JavaScript Mastery "`, remove extra whitespace and convert it to lowercase.

// **Hint:** Use `.trim()` and `.toLowerCase()`.

let str = `" JAVASCRIPT MASTERY "`
let space = str.trim()
console.log(space.toLowerCase)





// ### 🟢 9. **Numbers and Math**
// **Q10.** Round the number `4.56789` to two decimal places.

// **Hint:** Use `.toFixed(2)` or `Math.round()` trick.






// ### 🟢 10. **Functions (Declaration, Parameters, Return)**

// **Q11.** Write a function that takes two numbers and returns their sum.
 
// **Hint:** Use `return` keyword inside the function.
function sum(a,b){
 return a + b;
}

console.log(sum(4,3))




// **Q12.** What’s the difference between a function declaration and a function expression?

// **Hint:** Think about hoisting—declared functions are hoisted, expressions are not.







// ### 🟢 11. **Arrow Functions**
// **Q13.** Rewrite this function using arrow syntax:
// ```js
// function greet(name) {
//   return "Hello, " + name;
// }
// ```

// **Hint:** For single return expressions, arrow functions can be one-liners.


let greet = (name)=>{ return "hello " + name}
console.log(greet("archit"))



// ### 🟢 12. **Scope (Block, Function, Global)**
// **Q14.** What will be the output?
// ```js
// let x = 5;
// function test() {
//   let x = 10;
//   console.log(x);
// }
// test();
// console.log(x);
// ```

// **Hint:** Understand how local vs global scope works.

// ---

// ### 🟢 13. **Arrays (Basics)**
// **Q15.** Create an array of 5 fruits. Print the first and last element.

// **Hint:** Use index access: `arr[0]` and `arr[arr.length - 1]`.

// ---

// ### 🟢 14. **Array Methods**
// **Q16.** Add an item to the end and remove the first item of the array `['a', 'b', 'c']`.

// **Hint:** Use `.push()` and `.shift()`.

// ---

// ### 🟢 15. **Looping through Arrays**
// **Q17.** Given `let nums = [2, 4, 6, 8]`, print each number multiplied by 2.

// **Hint:** Use a `for` loop or `for...of`.

// ---

// Let me know if you'd like:
// - The same questions without hints (for practice),
// - More complex variations,
// - Or if anything here goes beyond the scope you want (I’ll trim it out).