



// 1  Print numbers from 50 to 1 using a `for` loop and a `while` loop. (Hint: Use decrementing loops)

// for(i=50 ; i>=1 ; i--){
//     console.log(i)
// }

// using while loop

// i= 50
// while(i>0){
//     console.log(i)
//     i--;
// }






// 2   multiple of 8 using loop

// for(i=8 ; i<81 ; i+=8){
//     console.log(i)
// }






// 3   Iterate over an array using `forEach` and print each value. (Hint: Use `forEach` method)

// for each 
// var arr = [1,2,3,4,5]


// arr.forEach(function(chacha){
// console.log(chacha) })









// 4  doubling each element of array using .map

// let arr = [ 1,2,3,4,5 ]

// let newArray = arr.map(function(kuchbhi){
//     return kuchbhi * 2;
// })


// // let newArray = arr.forEach(function(kuchbhi){
// //     return kuchbhi * 2 ;
// // })

// console.log(newArray)







// 5   Filter numbers greater than 10 from an array. (Hint: Use `filter` method)

// let arr = [ 1,3,5,7,10,15,18,20,25]

// let newarr = arr.filter(function(f){
//     return f > 10 ;
// })

// console.log(newarr)






// 6  Calculate the sum of an array using `reduce`. (Hint: Accumulate values using `reduce`)


// let arr = [ 1,2,3,4,5,6,7,8,9,10]

// let arr2= arr.reduce(function(s,e){
//     return s + e;
// })

// console.log(arr2)





// 7  Find the product of all numbers in an array using `reduce`. (Hint: Multiply instead of adding)



// let arr = [ 1,2,3,4,5,6,7,8]

// let arr2= arr.reduce(function(s,e){
//     return s * e;
// })

// console.log(arr2)



// 8   Iterate over a string "JavaScript" using `for...of`. (Hint: Use a loop to print each character)


// var str = "JavaScript"

// for(kuchbhi of str){
//     console.log(kuchbhi)
// }





// 9  Reverse a string without using `.reverse()`. (Hint: Use a loop to construct the reversed string)

// let str1 = "typescript"
// let str2 = ""

// console.log(str1,str1.length)

// for( var index = str1.length - 1 ; index >= 0 ; index -- ){
// str2 += str1[index]}
// console.log(str2)




// 10   Find the second largest number in an array. (Hint: Sort the array and pick the second element) 


// let arr = [ 1,5,10,15,10,20,32,45,1,5,7,3 ]

// console.log([...new Set(arr)].sort((a,b) => b -a )[1])






// 11    Find the most frequent element in an array. (Hint: Use an object to count occurrences)

// let arr = [1, 3, 3, 2, 1, 3, 2, 2, 2, 4];


// let obj = {};

// arr.forEach(val => {
//     if (obj[val] === undefined) {
//         obj[val] = 1;
//     } else {
//         obj[val]++;
//     }
// });

// let maxFreq = 0, mostFrequent;

// for (let key in obj) {
//     if (obj[key] > maxFreq) {
//         maxFreq = obj[key];
//         mostFrequent = key;
//     }
// }

// console.log(mostFrequent); // Output: 2










//  Q  What will be the output?

// var str = "Javascript";
// console.log(str.length);  // 10
// console.log(str[str.length ]) // undefined
// console.log(str[str.length -1 ]) // t

