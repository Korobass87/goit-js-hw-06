const submitButton = document.querySelector("button")
const form = document.querySelector(".login-form")
let formEntries = {}
form.addEventListener('submit', chechForm)
 function chechForm(event) {
    event.preventDefault();
    if (event.currentTarget.elements[0].value === "" || event.currentTarget.elements[1].value === "") { alert("Все поля должны быть заполнены") }
    else {
        const formData = new FormData(event.currentTarget)
        
        formData.forEach((value, name) => {
           
            formEntries[name] = value
            
        })
        console.log(formEntries)
        form.reset()
    }
     
 }

    