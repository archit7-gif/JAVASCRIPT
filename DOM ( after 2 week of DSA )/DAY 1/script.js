


// dom

// selecting element 
// changing HTML
// changing CSS
// Adding Event listner







// 1 Selection of element 

// document.querySelector(".class") // agar class h
// document.querySelector("#id")  // agar id hai 
// document.getElementById('id') // specially for id
// document.getElementsByClassName('class') // specially for class
  

// var a = document.querySelector("h1")   
// console.log(a)





// abhi tak jo bhi dekha tha vo single elemnt k liye ko select karta tha bas ,
// ab hame multiple ko select karna hai aur uske liye ham use karenge " quarrySelector ALL"

// it selcts the heading or elemts in form of array or something like that ( node list ki form mai ata hai )
// var h1 = document.querySelectorAll('h1') 

// if now hame kise element mai ya fir multiple h1 mai se kise ek h1 mai change karna hai to ham ese karenge

// h1[0].innerHTML = 'quarry sclector wala'
// h1[1].innerHTML = 'sclector wala'
// h1[2].innerHTML = 'quarry  wala'








// 2 changing HTML

// var a = document.querySelector("h1")  
// a.innerHTML = "lavdasur" 

// or

// var a = document.querySelector("h1").innerHTML = "huii"  

 



// inner text , text content bhi dekhna

// var box = document.querySelector('#box')

// box.innerHTML="<h1>Changed<h1/>"
// box.textContent="<h1>Changed<h1/>"






// 3 changing CSS

// a.style.color= "red"
// a.style.backgroundColor = "black"






// 4 even listner

// var a = document.querySelector("h1")  

// a.addEventListener("click",function(){   // click krne p chlage 

// a.innerHTML = "krli na bakchodi";
// a.style.color = "yellow";
// a.style.backgroundColor = "black";

// // console.log("hellloww")

// })






// var butt = document.querySelector('button')

// var box = document.querySelector('#box')

// butt.addEventListener("click",function(){
// console.log("button clickedd")
//     box.style.backgroundColor = 'green'

    
// })

// if we want a ready made function to be triggred we do no need to call it like that () ,
// we just simply need to add it into event listner where we write 




// var btn = document.querySelector('button')
// var h5 = document.querySelector('h5')

// btn.addEventListener('click',function(){
//     console.log("function chal gaya")
//     h5.innerHTML = "friends"
//     h5.style.color = "green"
//     btn.innerHTML = 'remove friend'
// })





// compplete process


var btn = document.querySelector('button')
var h5 = document.querySelector('h5')

var flag = 0

btn.addEventListener('click',function(){
if(flag == 0 ){
    h5.innerHTML = "friends"
    h5.style.color = 'green'
    btn.innerHTML = 'Remove Friend'
    flag = 1;
} else {
    h5.innerHTML = "Stragers"
    h5.style.color = 'red'
    btn.innerHTML = 'Add Friend'
    flag = 0
}})



// homework such question ua kuch bana na