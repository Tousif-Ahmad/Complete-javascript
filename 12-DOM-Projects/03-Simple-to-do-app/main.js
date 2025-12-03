// let addInput = document.querySelector(".addInput");
// let addBtn = document.querySelector(".addBtn");
// let listContainer = document.querySelector(".listContainer");

// let list = [
//     // {id : 123, text : "hello"},
//     // {id : 234, text : "how are you"},
//     // {id : 789, text : "i am fine what about you"}
// ]
// function render(arr){
//     listContainer.innerHTML = "";
//     arr.map((items)=>{
//     let {id, text} = items;
//     let divElem = document.createElement("div");
//     divElem.className = "list";
//     divElem.innerHTML =    `
//           <p>${text}</p>

//     `
//     let buttonElem = document.createElement("button");
//     buttonElem.innerText = "❌";
//     divElem.appendChild(buttonElem);
//     // button clicked functionality
//     buttonElem.onclick = ()=>{
//         handleDeleteList(items.id)
//     }
//     // buttonElem.addEventListener("click", ()=>{
//     //     handleDeleteList(obj.id)
//     // })
//     listContainer.append(divElem)

// })
// addInput.value = "";
// }
// render(list);

// function handleAddBtn(){
//     let obj = {
//         id : Date.now(),
//         text : addInput.value,
//     }
//     list.push(obj);
//     render(list)
// }

// function handleDeleteList(id){
//     let filteredList = list.filter((obj)=>{
//         return obj.id !== id;
//     })
//     list = filteredList;
//     render(list);
// }
// addBtn.addEventListener("click", handleAddBtn)

// ----------------------- 2nd approach -------------------------------//
let addInput = document.querySelector(".addInput");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".listContainer");

let list = [];

function render(arr) {
    listContainer.innerHTML = "";

    arr.forEach(item => {
        const divElem = document.createElement("div");
        divElem.className = "list";
        divElem.dataset.id = item.id;  // store ID in div itself

        divElem.innerHTML = `
            <p>${item.text}</p>
            <button class="deleteBtn">❌</button>
        `;

        listContainer.appendChild(divElem);
    });

    addInput.value = "";
}

function handleAddBtn() {
    if (addInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    list.push({
        id: Date.now(),
        text: addInput.value
    });

    render(list);
}



function handleDelete(id) {
    list = list.filter(item => item.id !== id);
    render(list);
}

// 🔥 EVENT DELEGATION
listContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        let parent = e.target.closest(".list");
        let id = Number(parent.dataset.id);
        handleDelete(id);   /* 2334 */
    }
});

addBtn.addEventListener("click", handleAddBtn);

render(list);

