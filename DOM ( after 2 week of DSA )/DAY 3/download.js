

// exploring webAPI


// setTimeout  = Delay ( kitna wait karweyga)
// setInterval =  controller loop


// console.log("hellow 1")
// setTimeout(function(){
//     console.log("hellow 2")
// },2000)



// console.log("hello 1")
// setTimeout(function(){
// console.log("hello 2")
// },4000)
// setTimeout(function(){
//     console.log("hello 3") 
// },2000)








// adding and removing friend using SETtime out 


// var btn = document.querySelector('button')
// var h5 = document.querySelector('h5')

// var flag = 0;

// btn.addEventListener('click',function(){
//    if(flag == 0 ){
//     h5.innerHTML = "Request Sent..."
//     h5.style.color = 'gold'
//     btn.innerHTML = "Adding..."

//    setTimeout(function(){
//     h5.innerHTML = "Friends"
//     h5.style.color = 'green'
//     btn.innerHTML = "Remove Friend"
//     flag = 1
//     },5000)}

//     else{
//     h5.innerHTML = "Stranger"
//     h5.style.color = 'Red'
//     btn.innerHTML = "Add friend"
//     flag = 0

//    }
// })








// set interval code chlta rahega har us second badd jo diya hoga time repat hoga

// like  setInterval(function{
//     console.log("hello")
//    },1000)   // har 1 sec mai console pa hello print hoga



// var i =1;

// var print = setInterval(function(){console.log("Helllo",i++)},100)

// setTimeout(function(){clearInterval(print)},3000)








// var btn = document.querySelector('button')
// var perecent = document.querySelector('#percent')
// var growth = document.querySelector('#growth')



// btn.addEventListener('click',function(){
//    var grow = 0
//    var int = setInterval(function(){
//     grow++
//     perecent.innerHTML= grow + "%"
//     growth.style.width = grow + "%"
//    },30)

//    setTimeout(function(){
//     clearInterval(int)
//     btn.innerHTML = "Downloaded"
//     btn.style.opacity = 0.5
//     btn.disabled = true;
//    },3000)
// })













// thda advance
var btn = document.querySelector('button');
var percent = document.querySelector('#percent');
var growth = document.querySelector('#growth');

btn.addEventListener('click', function () {
    var grow = 0;
    var speed = Math.random() * 30 + 20; // Random interval (20ms to 50ms)
    
    var int = setInterval(function () {
        if (grow >= 100) {
            clearInterval(int);
            btn.innerHTML = "Downloaded";
            btn.style.opacity = 0.5;
            btn.disabled = true;
        } else {
            grow++;
            percent.innerHTML = grow + "%";
            growth.style.width = grow + "%";
        }
    }, speed);
});




// use math.random in this for more improvement




// var btn = document.querySelector('button');
// var percent = document.querySelector('#percent');
// var grow = 0;
// var growth = document.querySelector('#growth');

// btn.addEventListener('click', function () {
//     var randomTime = Math.floor(Math.random() * (7000 - 3000) + 3000); // Random between 3s to 7s
//     var stepTime = randomTime / 100; // Adjusted step time to evenly complete in randomTime

//     var int = setInterval(function () {
//         if (grow < 100) {
//             grow++;
//             percent.innerHTML = grow + "%";
//             growth.style.width = grow + "%";
//         } else {
//             clearInterval(int); // Stop when reaching 100%
//         }
//     }, stepTime);

//     setTimeout(function () {
//         clearInterval(int);
//         btn.innerHTML = "Downloaded";
//         btn.style.opacity = 0.5;
//         btn.disabled = true;
//     }, randomTime);
// });










