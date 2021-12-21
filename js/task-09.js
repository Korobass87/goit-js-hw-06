function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color")
const color = document.querySelector(".color")
const body = document.querySelector('body')

console.log(body)
buttonChangeColor.addEventListener('click', changeColor)
function changeColor() {
  let newColor = getRandomHexColor()
  body.style.backgroundColor = newColor
  color.textContent = newColor
  
}