const menu = document.getElementById("Menu")
const action = document.getElementById("action")

menu.addEventListener("click" ,()=> {
    hundleMenu();
})

function hundleMenu() {
    Menu.classList.toggle("is-active")
    action.classList.toggle("is-active")
}