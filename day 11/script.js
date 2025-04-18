

// 1   Create a function that takes a callback and executes it after every `n` seconds indefinitely

// function chalateraho(f , time){
//  setInterval(f,time)
// }


// chalateraho(function(){
//     console.log("helllo")
// },2000)





// 2   Implement a function that returns a function with a preset greeting (Closure).


// function thatReturnsaFunction(greetinghaiyeh){
//     return function(naaam){
//       console.log(`${greetinghaiyeh} ${naaam}`)
//     }
// }
// let UparseJoFucntionAya= thatReturnsaFunction("helllo")

// UparseJoFucntionAya("archit");  
// // es bracket mai kuch bhi denge vo upr returned wale function mai k bracket mai jyega
// UparseJoFucntionAya("harami");  
// UparseJoFucntionAya("lodaahh");  
// UparseJoFucntionAya("ayushu");  


// var spanishgreeting = thatReturnsaFunction("hola")
// spanishgreeting("bhuvan")




// also this



// function greetSetup(greeting){
      
// return function(name){
//     console.log(`${greeting} ${name}`)}
// }

// var INDgreeter = greetSetup("namste")
// INDgreeter("harsh")

// var Spanishgreeter = greetSetup("Hola")
// Spanishgreeter("meloni")





// 3  Implement a function that takes a callback and only executes it once (HOF + Closure).


// function callbackwala(cb){
//  let executed = false
//    return function(){
//     if(!executed){
//         executed = true;
//         cb();
//      }

//      else(console.log("already executed once"))
//    }
// }

// var newFnc = callbackwala(function(){
//     console.log("should be executed only once")
// })

// newFnc()
// newFnc()
// newFnc()







// 4   Implement a function that throttles another function (HOF + Closures).


function throttle(fn , delay){
  let lastCall = 0;

  return function (){
   let current =  Date.now();
   if(current - lastCall >= delay){
    lastCall = current;
    fn();
   }
  }
}

var newFNC =throttle(function(){
    console.log("will run in 2 sec")
}, 2000)

newFNC()