

// var a= "architpandey"

// var b= "pandey"


// console.log(a+b)



// conditonals 

// var unit= +prompt("bijli ka bill kitna unit ayya ?")

// var bill 

// if(unit>=100){
// bill=unit*10

// }else if(unit>=50){
//  bill=unit*8
// }
// else{
// bill=unit*5
// }

// console.log(bill)






// weather condition 

// var weather= prompt("weather condition")

// if(weather ==='rainy'){
// console.log("take an umbrella")}

// else if(weather ==="sunny"){
// console.log('wear sunglasses')}

// else if(weather ==="cold"){
// console.log("wear a jacket")}

// else if(weather ==="windy"){
// console.log("hold onto your hat !")}

// else{console.log("be safe")}





// check the number

// var number = +prompt("enter the number")

// if(number<0){console.log(" its a Negative number")}

// else if (number>0){console.log(" its a postive Number")}

// else if (number === 0){console.log("is a complete zero")}


// console.log(typeof NaN)




// Questions

//1 

// let age = +prompt("Enter your age")

// if(age<18){
//     console.log("yor are minor")
// }else if(age>=18 && age<=60){
//     console.log("you are an adult")
// }else if(age>60){
//     console.log("you are senior sitizen")
// }



// 2 odd even number 

// let Number = +prompt("enter number")

// if(Number % 2 === 0 ){
//  console.log("even number")
// }else{console.log("odd number")}



// 3   character case chacker 

// let character = prompt("Enter Sinle Character")

// if(character.length === 1){

// if(character >= "A" && character <= "Z"){
//     console.log("CAPTAL LETTERS")
// }else if (character >= 'a' && character <= 'z'){
//     console.log("small letters")
// }else{
//     console.log('its not a small or capital sinle letter')
// }
// }
// else{console.log("plese enter a single digit letter")}






// 4    largest of 3 numbers 



// let num1 = +prompt("Enter num1")

// let num2 = +prompt("Enter num2")

// let num3 = +prompt("Enter num3")


// if(num1>num2 && num1>num3){
//     console.log("Num 1 is greater and its value is ", num1)

// }else if (num2>num1 && num2>num3){
//     console.log("Num 2 is greater and its value is ", num2)

// }else{console.log("Num 3 is greater and its value is ", num3)}





//  5  leap year 

// let year = +prompt("Enter the Year")

// if(year % 400 === 0){
//     console.log("its a leap year")
// }else if (year % 100 === 0 && year % 400 !== 0){
//   console.log("its not a leap year")
// }else if(year % 4 === 0 && year % 100 !== 0){
//     console.log("its a leap year")
// }else if (year % 4 !== 0 ){
//     console.log("its not a leap year")
// }



// 6   Simple calculator



// let number1= +prompt("first number")

// let number2= +prompt("Second number")

// let ope = prompt("enter the operator")


// if(ope === '-'){
// console.log(number1-number2)
// }else if(ope === '+'){
//     console.log(number1+number2)
// }else if (ope === '*'){
//     console.log(number1*number2)
// }else if(ope === '/'){
//     console.log(number1/number2)} 




// 7   positive negative or zero 


// var num = +prompt("enter a number")


// if(num > 0){
//   console.log("its a positive number")

// }else if (num < 0){
//   console.log( "its a negative number" )
// }
//  else if( num === 0 ){
//   console.log("its a zero ")
// }




// 8   ask the user,s name and time (24 hours) format


// var namee = prompt("Enter your name:");
// var time = +prompt("Enter the time in 24-hour format ");

// if(time >= 5 && time <12 ){
//   console.log("good morning ",namee)

// }else if(time >=12 && time < 17 ){
//   console.log("Good after Noon", namee)

// }else if(time >= 17 && time < 21){
//   console.log("Good Evening" , namee)

// }else {console.log("Good Night" , namee)}









// 9  Traffic Light System - 

// let light = prompt("enter the traffic signal")

// if(light==="red"){
//   console.log("STOP")
// }else if(light=== "yellow"){
//   console.log("Get Ready with me")
// } else if (light=== "green"){
//   console.log("pehli fursat mai nikal")
// }






// 10   Multiplication Table

var num = +prompt("ENTER any NUMBER")

console.log(num*1,num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10)





// 11     Grade Calculator

// let Grade = +prompt("ENTER YOUR MAKRS")

// if(Grade >= 90 && Grade <= 100){
//   console.log("Your Grade is A")} 
// else if(Grade >= 80 && Grade <= 89){
//   console.log("Your Grade is B")}
// else if(Grade >= 70 && Grade <= 79){
//   console.log("Your Grade is C")}
// else if(Grade >= 60 && Grade <= 69){
//   console.log("Your Grade is D")}
// else if(Grade >= 30 && Grade <=59){  
//   console.log("Your Grade is E")}
// else if(Grade<30){
//   console.log("Your Grade is F")}
// else {
//   console.log("Invalid marks entered! Please enter a number between 0 and 100.")}




// 12   Simple Login System 


// let up =prompt("ENter User name ")
// let up2 = prompt(" enter pass")

// let username = "archit"
// let password = "ap"

// if(username === up && password === up2){
//   console.log("login sucessfllly")
// }else{
//   console.log("something went Wrong")
// }





// 13   swapping without third variable              not got it

// var val1 = +prompt("Enter First Number")
// console.log("value of val 1 is ",val1)

// var val2 = +prompt("Enter Second Number")
// console.log("value of val 2 is ",val2)

// var val1 = val2 ;
// console.log("the latest value of VAL 1 is ",val1);

// var val2 = val1;
// console.log("the latest value of VAL 2 is ",val2);







// 14  FIZZBUZ


// var n = +prompt("Enter A number")

// if (n % 3===0 && n % 5 === 0){
//   console.log("FIZZBUZZ")

// } else if (n % 3===0 && n % 5 != 0){
//   console.log("FIZZ")

// } else if (n % 3 != 0 && n % 5 === 0){
//   console.log("BUZZ") }

// else{console.log(n)}