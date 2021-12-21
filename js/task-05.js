const inputName = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")
console.log(inputName)
console.log(nameOutput)

inputName.addEventListener("input", (event) => {
    console.log(event.currentTarget.value)
    event.currentTarget.value === "" ?
        nameOutput.textContent = "Anonymous" :
        nameOutput.textContent = event.currentTarget.value
    
})