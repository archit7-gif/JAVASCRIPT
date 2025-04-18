

// call back function : a function we sends as a call back or ( ek aise function jo aap kise aur function me
//  pass kte ho future mai chalane k liye )

// function abcd(val){
//  val();
// }
// abcd(function(){})



// HOFS : ek aisa function jo accept kare doosra function in parameter ya fir return kare ek aur function , aise
// function ko kehte hai HOFS

// function cd (ab){
//    return function(){}
// }

// // cd(function(){})
// cd();



// clousers :  ek aisa functuon jo return kare doosra function and jo fnc return hua hai 

// function abc(){
//    var a = 10;
//     return function(){
//       console.log(a)
//     }
// }

// every closure is hofs but not every hofs is closure




// .map method 

// var arr = [1,2,3,4,5]

// var arr2 = arr.map(function(kuchbhi){
//     return kuchbhi + 2;
// })

// console.log(arr2)














//  Questions 

// 1  Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function caller(fn){
// setTimeout(fn , 3000) }

// caller(function(){
// console.log("hey")})







// 2  implement your own version of `.map()` as a higher-order function

// var arr =[1,2,3,4,5]

// function mapkicopy(arr , fnc){
//     var newarr = []  // map ek new empty array create karta hai jisme sab ata hai

//     for (var i=0 ; i<arr.length; i ++){
//         newarr.push(fnc(arr[i]));
//     }
//     return newarr;
// }


// var run = mapkicopy(arr,function(val){
//   return val + 3;
// });

// console.log(run)






// 3 Write a function that uses closures to create a counter.


// function counter(){
//     let count = 0
//     return function(){
//         count ++ ;
//         console.log(count)
//     }
// }

// // counter()()

// var retd = counter()
// retd()
// retd()






// 4 Implement a function that limits how many times another function can be called (Closure + HOF).

// function fnlimiter(fn , limit){
//     let total = 0;
//   return function (){
//     if(total < limit ){
//         total ++ ;
//         fn();
//     }
//     else(console.error("limit exceeded , paisa do aur karne k liye"))
//   }
// }
// let limiter = fnlimiter(function(){
// console.log("hello")},3)

// limiter();
// limiter();
// limiter();
// limiter();











// questions : // var arr =[1,2,3,4,5]

// function mapkicopy(arr , fnc){
//     var newarr = []  // map ek new empty array create karta hai jisme sab ata hai

//     for (var i=0 ; i<arr.length; i ++){
//         newarr.push(fnc(arr[i]));
//     }
//     return newarr;
// }


// var run = mapkicopy(arr,function(val){
//   return val + 3;
// });

// console.log(run)



// gpt 

function map(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i])); // 🚨 Index nahi bhej rahe
    }
    return newArray;
}

// ✅ Sirf `n` ka use karega, index nahi lega


// Test Case
console.log(map([1, 2, 3], function(n){
    return n + 1; 
})); // ✅ Output: [2, 3, 4]







// 
function map(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i)); // ✅ Index bhi bhej rahe hain
    }
    return newArray;
}

// ✅ `n` aur `i` dono ka use karega
function plusIndex(n, i) { 
    return n + i; 
}

// Test Case
console.log(map([1, 2, 3], plusIndex)); // ✅ Output: [1, 3, 5]