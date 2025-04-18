

// getting attribute
// var h =  document.querySelector('h1') 
// var att = h.getAttribute('id') // id for id class for class
// console.log(att)





// set attribute 

// var h =  document.querySelector('h1') 

// it requires 2 things , what was existing , and waht we want to set
// h.setAttribute('id','heroin')
// h.setAttribute('class','katrina')






// var img = document.querySelector('img')

// var attribute = img.getAttribute('alt')

// img.setAttribute('src','https://media.istockphoto.com/id/1052500062/photo/stray-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=m7g1K3rzRp4xFvgf9thwu92CyoO4o0xJqY6YDP6T2B4=')










// image swap wala 

// let img1 = document.querySelector('#image1')
// let img2 = document.querySelector('#image2')

// var btn = document.querySelector('button')

// btn.addEventListener('click',function(){
// let image1SRC =  img1.getAttribute('src')
// let image2SRC = img2.getAttribute('src')
   
// this can lead to src exchange infinite time 

// img1.setAttribute('src',image2SRC)
// img2.setAttribute('src',image1SRC)


// if u want to avoid infinite appearing then just directly paste the link instead of storing it in a variable and later exchanging

// })












// creating a new elementwith just js

// var heading =document.createElement('h1')
// var heading =document.createElement('p')
// var heading =document.createElement('span')
// var heading =document.createElement('div')
// var heading =document.createElement('img')

// console.log(heading.innerHTML="hello from js")






// appeanding into the h1 from html file from here

// var heading =document.createElement('h1')

// heading.innerHTML= "mai archit hu"

// var body = document.querySelector('body')

// body.appendChild(heading)






// var img = document.createElement('img')
// img.setAttribute('src','https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww')

// img.style.height = "200px"
// document.body.appendChild(img)







// var btn = document.querySelector('button')
// var body = document.querySelector('body')

// btn.addEventListener('click',function(){
//     var img = document.createElement('img')
//     img.setAttribute('src','https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww')

//     img.style.height = '100px'
//     body.appendChild(img)
//     console.log(img)
// })








// adding png with some more features


// var btn = document.querySelector('button')
// var body = document.querySelector('body')

// btn.addEventListener('click',function(){
   
// var x = Math.random()*90
// var y = Math.random()*90
// var rot = Math.random() *360
    

// var img = document.createElement('img')
// img.setAttribute('src','img1.png')
// img.style.height = '100px'
// img.style.position = 'absolute'
// img.style.left = x + '%'
// img.style.top = y + '%'
// img.style.rotate = rot + 'deg'

// body.appendChild(img) 

// })


// agar random images chea to ek array bana k le lena like ip wala jaisa tha













// handling multiple element


var box = document.querySelector('#box')



// box.addEventListener("click",function(){
//     console.log("event performedd")
// })

// box.addEventListener("dblclick",function(){
//     console.log("event performedd")
// })

// box.addEventListener("mouseenter",function(){
//     console.log("event performedd mouse wala")
// })

// box.addEventListener("mouseleave",function(){
//     console.log("event performedd mouse leave wala")
// })



// fpr box
// box.addEventListener('mousemove',function(debt){
//     console.log(debt.x)
//     console.log(debt.x)
// })




// for body
// document.addEventListener('mousemove',function(debt){
//     console.log(debt)
// })


// document.addEventListener('keypress',function(debt){
//     console.log(debt)
// })




// like wala feature bana na like insta mai hota hai


// sheriyans yt channel p dekhna dom ka project