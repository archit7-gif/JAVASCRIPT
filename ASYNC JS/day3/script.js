

// pehle pchle din ka revison pehle fir yeh



// FOOD DELEIVERY APP

// create a function that returns a promise . it should 
// resolve after seconds with " pizza delivered"

// bonous add a chance to reject with " deleviery failed"


// function FOOD(){
//     console.log("order accepted")
//     console.log("order prepared for delivery")

//     return new Promise(function(res,rej){
//     setTimeout(function(){ 
//         let chance = Math.random() < 0.7;
//         if (chance) res();
//         else rej();
//     }, 1000)


// })
// }

// FOOD().then(function(){
//     console.log("pizzza delivered")
// }).catch(function(){
//     console.log("deleviery failed")
// })






// 2 chained Promises: User-post comments

// create getuser() resolves with { id:1 , name: "archit"}
// getPosts(userID) resolves with list of post titles 
// getComments(post ID) resolves with comments

// chain them togeter using.the() and log the final output



// function getuser(){
//     return new Promise(function(res,rej){
//     setTimeout(function(){
//     res( { id:1 , name: "archit"} )
//     },1000)
//     })
// }

// function getPosts(userID){
//     return new Promise(function(res,rej){
//     setTimeout(function(){
//         res(["Title 1","Title 2"])   
//     },2000)
//     })
// }

// function getComments(postID){
// return new Promise(function(res,rej){
//     setTimeout(function(){
//     res(["Good post","Amazing conent"])   
//     },2000)
//     })
// }


// getuser().then(function(data){console.log(data)
// return getPosts(data.id)

// }).then(function(titles){console.log(titles)
// return getComments("acaxgx")

// }).then(function(cmts){ console.log(cmts)

// }).finally(function(){console.log("all data fetched")})







// 3 fake API call

// write a function fakeAPIcall(endpoint) that:
// accepts a string like "users" or "posts"
// resolves with some dummy data after a random delay (1-3 sec)



// function fakeAPIcall(endpoint){

//     const data = {
//         users : ["arcchit","Shivam","puneet"],
//         posts : ["hey champs","great going everyone","lets build this"]
//     }

//     let delay = Math.random() * 2000 + 1000
//     return new Promise(function(res,rej){
//         setTimeout(function(){
//         res(data[endpoint])
//         },delay)
//     })

// }

// fakeAPIcall("users").then(function(data){
//     console.log(data)
// })

// fakeAPIcall("posts").then(function(data){
//     console.log(data)
// })


