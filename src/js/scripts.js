const create = document.getElementById("createBtn")
const list = document.getElementById("todo-list")

const inputArea = document.getElementById("input-area")
let input = ""
inputArea.addEventListener("keyup", function () {
    input = inputArea.value
    if (input.length < 6) {
        inputArea.style.cssText = "border-color: red"
        create.disabled = true
        console.log("igaz")
    } else {
        create.disabled = false
        inputArea.style.cssText = "border-color: green"
        console.log("hamis")
    }
})

create.addEventListener("click", function () {
    const liItem = document.createElement("li")
    const btnItem = document.createElement("button")
    btnItem.addEventListener("click", function () {
        liItem.remove()
    })
    btnItem.innerHTML = "Remove"
    btnItem.className ="removeBtn"
    liItem.textContent = input
    liItem.appendChild(btnItem)
    list.append(liItem)
    inputArea.value = ""
});
