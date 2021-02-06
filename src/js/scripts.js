const create = document.getElementById("createBtn")
let list = document.getElementById("todo-list")

const inputArea = document.getElementById("input-area")
let input = ""
inputArea.addEventListener("keyup", function () {
    input = inputArea.value
    if (input.length < 6 || 35 < input.length) {
        inputArea.style.cssText = "border-color: red"
        create.disabled = true
    } else {
        create.disabled = false
        inputArea.style.cssText = "border-color: green"
    }
})

create.addEventListener("click", function () {
    const liItem = document.createElement("li")
    const divItem = document.createElement("div")
    const dueItem = document.createElement("a")
    const priorityItem = document.createElement("a")
    const btnItem = document.createElement("button")

    liItem.className = "task"

    dueItem.innerHTML = "Due Date"
    dueItem.className = "duedate"
    dueItem.addEventListener("mouseover", function () {
        dueItem.style.textDecoration = "underline"
    })
    dueItem.addEventListener("mouseout", function () {
        dueItem.style.textDecoration = "none"
    })
    dueItem.addEventListener("click", function () {
        dueItem.innerText = window.prompt("What is the due date?")
    })

    priorityItem.innerHTML = "Priority"
    priorityItem.className = "priority"

    priorityItem.addEventListener("mouseover", function () {
        priorityItem.style.textDecoration = "underline"
    })
    priorityItem.addEventListener("mouseout", function () {
        priorityItem.style.textDecoration = "none"
    })
    priorityItem.addEventListener("click", function () {
        priorityItem.innerText = window.prompt("What is the priority? (Low, Medium, High)")
    })

    btnItem.innerHTML = "Remove"
    btnItem.className ="removeBtn"
    btnItem.addEventListener("click", function () {
        liItem.remove()
    })

    liItem.textContent = input
    divItem.appendChild(dueItem)
    divItem.appendChild(priorityItem)
    divItem.appendChild(btnItem)
    liItem.appendChild(divItem)
    list.append(liItem)

    input = ""
    inputArea.value = ""
    inputArea.style.cssText = "border-color: red"
    create.disabled = true
});





/* Filter:

var prioritiesSelector = document.getElementById("priorities")
const prioritiesOfTask = document.getElementsByClassName("priority")

prioritiesSelector.addEventListener("change", function () {
    console.log(prioritiesSelector.value)
    for (let i=0; i<prioritiesOfTask.length; i++) {
        console.log(prioritiesOfTask[i].value)
    }
})


 */