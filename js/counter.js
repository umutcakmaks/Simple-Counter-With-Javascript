let counter= document.querySelector("#counter")
let decrease= document.querySelector("#decrease")
let increase= document.querySelector("#increase")
//I provided access with IDs.

let number = 0
//I set the initial state of the counter to 0.

if(parseInt(counter.innerHTML) >= 0){
    number = parseInt(counter.innerHTML)
}
//If the counter starting number from html is positive, I entered the value.

counter.innerHTML=number

const inClick = () => {
    number+=1
    counter.innerHTML=number
    //I defined the feature to increase by 1 when clicking the button.
}

const deClick = () => {
    if(number > 0){
        number-=1
        counter.innerHTML=number
    }else if(number == 0){
        counter.innerHTML=number
    }else if(number < 0){
        counter.innerHTML="Counter isn't be small from zero."
    }
    //I defined the feature to decrease by 1 when clicking the button.
    //I added a limit of not being less than 0 with the if-else command.
}

increase.addEventListener("click", inClick)
decrease.addEventListener("click", deClick)
//I defined what to do when the button is clicked.