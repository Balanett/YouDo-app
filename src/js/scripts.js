// Create To Do Item / Delete To Do Item

const create = document.getElementById("createBtn")
const list = document.getElementById("todo-list")

create.addEventListener("click", function () {
    const todoTxt = window.prompt("What is your todo:")
    const liItem = document.createElement("li")
    const btnItem = document.createElement("button")
    btnItem.addEventListener("click", function () {
        liItem.remove()
    })
    btnItem.innerHTML = "Remove"
    btnItem.className ="removeBtn"
    liItem.textContent = todoTxt
    liItem.appendChild(btnItem)
    list.append(liItem)
});

