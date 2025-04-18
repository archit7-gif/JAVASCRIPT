
// gmail generator 

// var namee = prompt("enter your name ")
// var BirthYear = +prompt(" Enter your Birth Year")

// var gmail = namee + BirthYear + "@gmail.com"
// console.log(gmail);




// change a particular value inside an array

// var arr = [1,2,3,4,5,6,7,8,9,10]
// console.log( arr[1], arr[2] ,arr[3] )

// var arr2 = arr[1,2,3]=[1,2,3]
// console.log(arr2)







//  UnShift , Shift , Pop , Push use case


// pop is used to remove the last elemnet of the the array

// var arr = [1,2,3,4,5]
// arr.pop();
// console.log(arr) // 5 gets removed 


// Shift is used to remove the first elemnet of the the array

// var arr = [1,2,3,4,5]
// arr.shift();
// console.log(arr) // 1 gets removed 



// unshift yeh elements ko array ki beginning mai add karta h

// var arr = [1,2,3,4,5]
// arr.unshift(12)          // 12 ko first mai add kar dega
// console.log(arr)



// push  ek array mai doosri values ghusaid degaa , push kr dega

// var arr = [1,2,3,4,5]
// arr.push(2.4)  // sabse last mai dalega
// console.log(arr)


// var arr =[1,2,3,4,5]
// var arr2 = []

// for(i=0; i<arr.length ; i++){
//     console.log(arr2.push(arr[i]))
// }




// table from 1 to 10 

// for(i= 1 ; i <= 10 ; i++){
//     console.log("Table of", i ,'is')
//     for(t = 1 ; t <= 10 ; t++){
//         console.log(i*t)
//     }
// } 






// adding two arrays and changing their values


let arr = [1,2,3,4,5]

let arr2 =[6,7,8,9,10]


let arr3 = [...arr,...arr2]
console.log(arr3)

arr3.push(15)
console.log(arr3)

arr3.unshift(12)
console.log(arr3)

arr3.pop();
console.log(arr3)

