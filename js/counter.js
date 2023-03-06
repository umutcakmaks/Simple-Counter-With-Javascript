let counter = document.querySelector("#counter")
let decrease = document.querySelector("#decrease")
let increase = document.querySelector("#increase")
let reset = document.querySelector("#reset")
//I provided access with IDs.

let number = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0
//I set the initial state of the counter to 0.

if (parseInt(counter.innerHTML) >= 0) {
    number = parseInt(counter.innerHTML)
}
//If the counter starting number from html is positive, I entered the value.

counter.innerHTML = number

const inClick = () => {
    number += 1
    counter.innerHTML = number
    localStorage.setItem("counter", number)
    //I defined the feature to increase by 1 when clicking the button.
}

const deClick = () => {
    if (number > 0) {
        number -= 1
        counter.innerHTML = number
        localStorage.setItem("counter", number)
    } else if (number == 0) {
        counter.innerHTML = number
        localStorage.setItem("counter", number)
    } else if (number < 0) {
        counter.innerHTML = "Counter isn't be small from zero."
        localStorage.setItem("counter", number)
    }
    //I defined the feature to decrease by 1 when clicking the button.
    //I added a limit of not being less than 0 with the if-else command.
}

const resetClick = () => {
    number = 0
    counter.innerHTML = number
    localStorage.setItem("counter", number)
}

increase.addEventListener("click", inClick)
decrease.addEventListener("click", deClick)
reset.addEventListener("click", resetClick)
//I defined what to do when the button is clicked.