const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")
let cost = []

ingredients.forEach(ingredient => {
  
  const item = document.createElement("li")
  item.textContent = `${ingredient}`
  item.classList.add('item')
  
  
  cost.push(item)
  
})

ingredientsList.append(...cost)