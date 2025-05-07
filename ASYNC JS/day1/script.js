

// synchronos and asynchronos code dono type k honge

// asynchronos code includes some of those :
// promise , callback , setTimeout , SetInterval , async await


// console.log("hello 1")
// setTimeout(function(){
// console.log("hello 2") }) // , yeh bhale se kita b time ho chalega last m hi
// console.log("hello 3")

// sabse pehle sync chlega fir async 



// TERMS :
// main thread , main stack , webAPI , callbackque , microstack queue , macrotask queue






console.log("hey 1")

setTimeout(function(){console.log("hey 2")},0);

Promise.resolve().then(function(){ console.log("hey 3")})

console.log("hey 4")

// its sequence is 1,4,3,2






// call back function
function abcd(cb){cb()}
abcd(function(){console.log("huee")})


setTimeout(function(){
console.log("heyyyyyyyyy")},1200)