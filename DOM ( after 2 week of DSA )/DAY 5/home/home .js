
let users = [
    {
      "img": "https://randomuser.me/api/portraits/men/1.jpg",
      "name": "Ethan Walker",
      "role": "Frontend Developer",
      
      "skills": ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
      "about": "Passionate about clean UI and performance optimization.",
      "status": "stranger"
    },
    {
      "img": "https://randomuser.me/api/portraits/women/2.jpg",
      "name": "Sophie Mitchell",
      "role": "Backend Engineer",
      
      "skills": ["Node.js", "MongoDB", "Docker", "Express.js"],
      "about": "Loves building scalable and secure APIs.",
      "status": "stranger"
    }
  
]


const main = document.querySelector('.main');

function abc(){
  
let sum = '';

users.forEach(function(user, index) {
 
sum = sum + 
  `<div class="card">
    <img src="${user.img}" alt="">
    <h3>${user.name}</h3>
    <h4>${user.role}</h4>
    <div class="skillSection">
     ${user.skills.map(function(skill){
     return `<div class="skills"><h5>${skill}</h5></div>`}) .join('')}
    </div>
    <p></p>
    <h3 >Status : <span class="status">${user.status}</span></h3>
    <button class="friend-btn" id=${index}>Add Friend</button>
  </div>`;

  main.innerHTML = sum

  
});
}

abc()


// event bubbling 



main.addEventListener('click',function(events){
  let userdata = (users[events.target.id])

  if(userdata.status === "Stranger"){
    userdata.status = "friends"
  }
  else{
    userdata.status = "Stranger"
  }
  
  abc()
 
})




























// // Humne sirf ek hi event listener lagaya 'main' par (event delegation)
// main.addEventListener('click', function(e) {

//   // Check kar rahe hain ki user ne click kisi 'Add Friend' ya 'Remove Friend' wale button pe kiya hai ya nahi
//   if (e.target.classList.contains('friend-btn')) {

//     let button = e.target;  // Jis button pe click hua, usko pakda
//     let card = button.closest('.card');  // Us button ka parent card dhoondha (poora user card)
//     let status = card.querySelector('.status');  // Card ke andar status wala <span> dhoondha

//     // Yahan check kar rahe hain ki agar button pe likha hai "Add Friend"
//     if (button.innerText === "Add Friend") {
      
//       button.innerText = "Request Sent";  // Button ka text change kiya
//       button.disabled = true;  // Button ko disable kiya taaki dobara click na ho

//       // Thodi der baad request accept karne ka kaam hoga
//       setTimeout(function() {
//         status.innerText = "friend";  // Status ko "friend" banaya
//         button.innerText = "Remove Friend";  // Button ka text change kiya
//         button.disabled = false;  // Button phir se clickable banaya
//       }, Math.random() * 2000 + 1000);  // Random delay: 1 se 3 second ke beech

//     }

//     // Agar button pe likha hai "Remove Friend", toh...
//     else if (button.innerText === "Remove Friend") {
//       status.innerText = "stranger";  // Status wapas "stranger"
//       button.innerText = "Add Friend";  // Button ka text wapas "Add Friend"
//     }

//   }

// });




