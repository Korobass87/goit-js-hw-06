function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes")
const inputNumber = document.querySelector("input")
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")

createButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', deleteBoxes)

function createBoxes() {
    const divColection = []
    let amount = inputNumber.value
    let x = 20
    for (let i = 0; i < amount; i += 1) {
      
      x += 10
      const item = document.createElement("div")
      item.style.backgroundColor = getRandomHexColor()
      item.style.height = `${x}px`
      item.style.width = `${x}px`
      divColection.push(item)
    
    }
  boxes.innerHTML = ""
  boxes.append(...divColection)
  
}

function deleteBoxes() {
  boxes.innerHTML = ""
}
