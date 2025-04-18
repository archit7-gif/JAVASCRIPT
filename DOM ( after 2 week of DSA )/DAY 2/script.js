
// // random color generator

// var btn = document.querySelector('button')

// var box= document.querySelector('#box')

// var span = document.querySelector('span')


// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
   
//     var color = `rgb(${c1},${c2},${c3})`

//     box.style.backgroundColor = color
//     span.innerHTML = color
//     span.style.color = color

// })










// var arr = ['archit','nikhat','harsh','aaksh']

// var num = Math.floor(Math.random()*arr.length)
// console.log(arr[num])



// let arr = ['CSK','MI','LSG','SRH','RR','RCB','KKR','PBKS','GT','DC']

// var btn = document.querySelector('button')

// var h1 = document.querySelector('h1')

// btn.addEventListener('click',function(){
//     let num = Math.floor(Math.random()*arr.length)
//     let win = arr[num]
//     console.log(win)
//     h1.innerHTML = win
// })





// thda advance aur 

var arr = [
    {
        team: "CSK",
        primaryColor: "Yellow",
        secondaryColor: "Green"
    },
    {
        team: "MI",
        primaryColor: "Blue",
        secondaryColor: "Gold"
    },
    {
        team: "RCB",
        primaryColor: "Red",
        secondaryColor: "Black"
    },
    {
        team: "KKR",
        primaryColor: "Purple",
        secondaryColor: "Gold"
    },
    {
        team: "DC",
        primaryColor: "Blue",
        secondaryColor: "Red"
    },
    {
        team: "RR",
        primaryColor: "Pink",
        secondaryColor: "Blue"
    },
    {
        team: "SRH",
        primaryColor: "Orange",
        secondaryColor: "Black"
    },
    {
        team: "PBKS",
        primaryColor: "Red",
        secondaryColor: "Silver"
    },
    {
        team: "LSG",
        primaryColor: "Light Blue",
        secondaryColor: "Orange"
    },
    {
        team: "GT",
        primaryColor: "Dark Blue",
        secondaryColor: "Gold"
    }
];

let btn = document.querySelector('button')
let h1= document.querySelector('h1')


btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length)
    let winner = arr[num]
    h1.innerHTML =winner.team
    h1.style.backgroundColor = winner.primaryColor
    h1.style.color = winner.secondaryColor
    

})