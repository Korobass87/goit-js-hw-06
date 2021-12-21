const fontSizeControl = document.querySelector("#font-size-control")
const textForControl = document.querySelector("#text")
textForControl.style.fontSize = `${fontSizeControl.value}px`

console.log(fontSizeControl.textContent)
fontSizeControl.addEventListener("change", (event) => {
    textForControl.style.fontSize = `${event.currentTarget.value}px`
    console.log(event.currentTarget.value)
})