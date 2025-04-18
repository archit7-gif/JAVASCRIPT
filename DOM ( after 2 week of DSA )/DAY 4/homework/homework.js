


var post = document.querySelector('#post')

// post p double tap hone p chalega
post.addEventListener('dblclick',function(){
    heartappearing()
})


function heartappearing(){
   heart.classList.add("dikhana")
    
   setTimeout(function(){ heart.classList.remove("dikhana")},1200)
}






