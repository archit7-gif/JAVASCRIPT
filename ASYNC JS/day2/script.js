

// how does async code ru behind the hood ?

//call backs ( abhi simple cb hai )
// koi function ko chala te time yeh bata dena ki kaam 
// hone ke badd konsa function chalana h


// function getdetails(name,cb){
//     setTimeout(function(){
//     console.log("sending req to insta..")
//     },1000)

//     setTimeout(function(){
//     console.log("fetching data...")
//     },3000)

//     setTimeout(function(){
//     cb()
//     },3500)
// }
// getdetails("archit",function(){console.log("data saved")})





// examples of callback Hell

// function stepOne(cb){
// console.log("step 1")
// cb()}

// function steptwo(cb){
// console.log("step 2")
// cb()}

// function stepThree(cb){
// console.log("step 3")
// cb()}

// stepOne(function(){
//     steptwo(function(){
//     stepThree(function(){
//     console.log("all call-backs called")})
//     })
// })








// instagram se data lana hai , kab yega kitni der mai ayega pata nahi
// eske liye promise use krenge


// var pr = new Promise(function(resolve,reject){
//     console.log("instagram se data laaao")
//     console.log("instagram sse data collect ho raha h ")
//     console.log("data collection mai error")
//     reject()
// })


// pr.then(function(){
// console.log("resolved hogya")
// }).catch(function(){
// console.log("rejected")
// })






// agar resolved hua to then chelaga agr nahi to catch
// now using promise 

function stepOne(){
return new Promise(function(resolve,reject){
console.log("step 1")
resolve() })    
}

function steptwo(){
return new Promise(function(resolve,reject){
console.log("step 2")
resolve() }) 
}

function stepThree(){
return new Promise(function(resolve,reject){
console.log("step 3")
resolve() }) 
}

stepOne().then(steptwo).then(stepThree).then(function(){
    console.log("all call-backs called")
})