
// https://api.github.com/users/asynchronousJavascriptor



// document.querySelector("button").addEventListener("click",function(){
// fetch("https://api.github.com/users/asynchronousJavascriptor").then(raw => raw.json()).then(data =>{console.log(data)}) 
// })





function getUserInfo(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw)=>raw.json())
}

getUserInfo('async').then(function(data){
    console.log(data)
})