




function getProfileData(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw)=>{
        if(!raw.ok) throw new Error ("user not Found");
        return raw.json();
    });
}

function getRepos(username){
 return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw)=>{
    if(!raw.ok) throw new Error ("Failed to fetch Repos..");
    return raw.json()
 })
}

// getProfileData("async").then(function(data){
// console.log(data)
// })

// getRepos("async").then(function(data){
//     console.log(data)
//     })




function decorate(details) {
    const container = document.querySelector(".user-result");
    const data = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <img
          src="${details.avatar_url}"
          alt="${details.login}'s avatar"
          class="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
        />
        <div>
          <h2 class="text-xl font-bold">${details.name || details.login}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">@${details.login}</p>
          <p class="mt-2 text-sm">${details.bio || "No bio provided."}</p>
        </div>
      </div>
  
      <div class="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p class="text-lg font-semibold">${details.public_repos}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Repositories</p>
        </div>
        <div>
          <p class="text-lg font-semibold">${details.followers}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Followers</p>
        </div>
        <div>
          <p class="text-lg font-semibold">${details.following}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Following</p>
        </div>
      </div>
  
      <div class="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <p>Location: ${details.location || "Not specified"}</p>
        <p>Company: ${details.company || "Not specified"}</p>
        <p>Website: ${
          details.blog
            ? `<a href="${details.blog}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">${details.blog}</a>`
            : "N/A"
        }</p>
      </div>
    `;
    container.innerHTML = data;
  }

  

  let searchBtn = document.querySelector(".Search");
  let usernameinp = document.querySelector(".usernameinp");
  
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    let username = usernameinp.value.trim();
  
    if (username.length > 0) {
      getProfileData(username)
        .then((data) => {
          decorate(data);
        })
        .catch((err) => {
          alert("User not found");
          console.error(err);
        });
    } else {
      alert("Please enter a GitHub username.");
    }
  });
  