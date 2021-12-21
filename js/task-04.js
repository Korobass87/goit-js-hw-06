const decrementButton = (document.querySelector("#counter")).firstElementChild
const incrementButton = (document.querySelector("#counter")).lastElementChild
const valueEl = document.querySelector("#value")
let valueResult = 0

// console.log(decrementButton)
// console.log(incrementButton)
// console.log(valueEl)

incrementButton.addEventListener('click', () => {
    valueResult += 1
    valueEl.textContent = valueResult
})
decrementButton.addEventListener('click', () => {
    valueResult -= 1
    valueEl.textContent = valueResult
})


