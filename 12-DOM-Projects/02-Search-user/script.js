let search = document.querySelector("#search");
let userList = document.querySelector(".user-list");
let notFound = document.querySelector(".not-found");

const users = [
    {
        profileUrl : "./tousif.jpg",
        name : "Tousif Ahmad",
        email : "tousif@gmail.com"
    },
    {
        profileUrl : "./tousif2.jpg",
        name : "Sam Ahmad",
        email : "sam@gmail.com"
    },
    {
        profileUrl : "./tousif3.jpg",
        name : "Aina Ahmad",
        email : "aina@gmail.com"
    }
]

function renderUser(arr){
    userList.innerHTML = "";
    if (arr.length === 0){
        notFound.style.display = "block"
    }
    else{
        notFound.style.display = "none";
    }
    
    arr.map((item)=>{
    let {profileUrl, name, email} = item;
    let divElem = document.createElement("div");
    divElem.className = "user";
    divElem.innerHTML = `
        <img src="${profileUrl}" alt="">
          <div class="user-info">
            <h4>${name}</h4>
          <p>${email}</p>
          </div>
    `
    userList.append(divElem)
})
}
renderUser(users)   /* for initial render.. */


function handleSearch(e){

    let searchValue = e.target.value.trim();
    console.log(e);
    let filteredUsers = users.filter((obj)=>{
        return obj.name.toLowerCase().includes(searchValue.toLowerCase()) || 
         obj.email.toLowerCase().includes(searchValue.toLowerCase());
    })
    renderUser(filteredUsers)  /* filter user render .. */

}

search.addEventListener("input", handleSearch)