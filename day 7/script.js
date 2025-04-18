


// 1   diffrent ways to print console 

// console.log("hello")
// console.warn("hello")
// console.error("hello")
// console.info("hello")



// 2   Perform 35 * 2 - (10 / 2) + 7 and log the result.

// console.log(35*2 - (10/2) + 7)


// 3   Log the data type of "123", 123, true, and null using typeof.

// console.log(typeof "123")
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof null)




// 4   Write a program that swaps the values of two variables 

// with the help of 3 variable 

// var a  = 12;
// var b = 15;
// var c;

// c = a;
// a = b;
// b = c;



// with the help of 2 variable

// var z = 12 ;
// var x = 13;

// [z,x]=[x,z]
// console.log(z,x)




// var m = 12;
// var n= 13;

// m = m + n;
// n = m - n;
// m = m - n; 




 
// 5    Use console.group() to organize logs into a group.

// console.groupCollapsed("aj ka hisab")
// console.log("bahut kuch")
// console.log("mkb")
// console.log("ckm")
// console.groupEnd()



// 6   Declare a const object, modify its properties, and log the updated object.


// let obj = { name: "archit ", Gender : "male" , city : "haldwani ",}
// console.log(obj)
// console.log("new City = " , obj.city="Noida")
// console.log("new name  = ", obj.name = "Dikshant")

// //all new values 

// console.log(obj)




// 7  Convert "50" (string) into a number using 3 different methods.

// let a = +"50"
// console.log( " the type of a is ", typeof a)

// let a = Number("50")
// console.log("the type of a is ", typeof a)

//  let b = parseInt("500")
//  console.log("the type of b is ", typeof b , b)



 
//  8    Check if "JavaScript" contains "Script" without using .includes()



// way 1

// let str = "javaScript";

// console.log(str.indexOf("Script"))

// if (str.indexOf("Scripta") === -1){
//     console.log(false, " i cant find this element")}

// else(console.log(true , " i founded this element"))



// way 2

// let str2 = "programinglanguage";

// console.log(str2.indexOf("Languagw")); // This line prints the position of "languag"

// if (str2.indexOf("Language") !== -1) {
//     console.log(true, "I found this element"); // If "language" exists, print this
// } else {
//     console.log(false, "I can't find this element"); // If "language" does not exist, print this
// }




// let str2 = "programinglanguage";

// console.log(str2.search("language")); // This line prints the position of "languag"

// if (str2.search("language") !== -1) {
//     console.log(true, "I found this element"); // If "language" exists, print this
// } else {
//     console.log(false, "I can't find this element"); // If "language" does not exist, print this
// }





// 9.   Create an array of 5 numbers and log the sum using .reduce().







// 10.   Explain the difference between undefined, null, and NaN with examples.

// var a;
// console.log(a)  // its un defined 



// examples of NaN
// console.log("archit"*12)
// console.log("archit"/12)
// console.log("archit"%12)
// console.log("archit"+12)
// console.log("archit"-12)


// examples of Null 
