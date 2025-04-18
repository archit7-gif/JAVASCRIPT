


// var arr = [1,2,3,4,5]


// arr.forEach(function(chacha){
// console.log(chacha) })

// map     its makes a blank array and returns the value in it 
// var ans = arr.map(function(value){ return 12 })
// console.log(ans)



// filter 
// var ans1 = arr.filter(function(value){ return true })
// console.log(ans1)

// var ans2 = arr.filter(function(value){ return value > 2  })
// console.log(ans2)

// var ans3 = arr.filter(function(value){ return value === 3 })
// console.log(ans3)




// reduce method

// var ans = arr.reduce(function(accumulator,key){
// return accumulator + key ; },0)

// var ans2 = arr.reduce(function(accumulator,key){
// return accumulator * key ;},1)

// console.log(ans, ans2)














// 1 

// var arre = [1,2,3,4,5]

// var ans = arre.reduce(function(acc,key){
//     return acc + key;
// },0)

// console.log(ans)





// 2   write a for loop

// var i = 20;
// while (i>0){
//     console.log(i)
//     i--
// }


// for(i = 20 ; i > 0 ; i--){
//     console.log(i)
// }






// 3   getting the multiples of 12

// var i = 12;
// while(i<121){
//     console.log(i);
//     i+=12;
// }






// 4  calculate sum of each number from 1 to 100

// var vari = 0;
// for (var i = 1 ; i < 101 ; i++){
//    vari = vari + i
// }

// console.log(vari)






// 5   iterating over a string name " javaScript" ( for of loop )

// var s = "javaScript"

// for (var i of s){
//     console.log(i)
// }





// 6    Remove duplicate values from an array 

// var  arr =  [1,2,3,2,4,5,3,4,5,6,7]

// var neww = [...new Set(arr)]

// console.log(neww)














// day 9



// find the second largest in the array 


// var arr = [ 1,4,2,6,5,7,8,3,23,99,2,5,3 ]

// console.log([...new Set(arr)].sort(function(a,b){

// return b - a;

// })[1])








// var arr =  [ 1,2,3,4,5,6,7,79,98,321];

// var arr2 = []

// for(var i = arr.length - 1 ; i>= 0 ; i--){
//     arr2.push(arr[i])
// }

// console.log(arr2)








// find the most frquent element coming

var arr = [ 3,4,1,3,4,6,7 ];

let obj = {}

arr.forEach(function(val){
    obj[val]===undefined ? obj[val]=1 : obj[val]++;
});

// or

arr.forEach(function(val){
    if (obj[val] === undefined) {
        obj[val] = 1; // If the number is not in obj, add it with count 1
    } else {
        obj[val]++; // If it exists, increase its count
    }
});





// {
//     "3": 1,
//     "4": 2,
//     "1": 1,
//     "6": 1,
//     "7": 1
// }






















// let sum = 0

// for (let i = 1 ; i <=5 ; i++){
//     sum += i;
// }

// console.log(sum)



// let str = "JS"

// for(let char of str){
//     console.log(char+char)
// }