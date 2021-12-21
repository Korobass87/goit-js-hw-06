const inputValidation = document.querySelector("#validation-input")
// console.log(inputValidation)
inputValidation.addEventListener("blur", (event) => {
    // console.log(event.currentTarget.dataset.length)
    // console.log(event.currentTarget.value.length)

    if (Number(event.currentTarget.dataset.length) === event.currentTarget.value.length) {
       event.currentTarget.classList = []
        event.currentTarget.classList.add("valid")
    }
    else {
        event.currentTarget.classList = []
        event.currentTarget.classList.add("invalid")
    }
        
   
})