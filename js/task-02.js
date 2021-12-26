const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")

let cost=[]
ingredients.forEach(ingredient => {
  const item = document.createElement("li")
  item.textContent = `${ingredient}`
  item.classList.add('item')
  cost.push(item)
})

// const listElem = ingredients.map(ingredient => `<li class = item >${ingredient}</li>`
// ).join("")

// ingredientsList.insertAdjacentHTML("afterbegin", listElem)