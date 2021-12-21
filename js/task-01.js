const itemOfCategory = document.querySelectorAll(".item")
console.log(`Number of categories: ${ itemOfCategory.length }`)

const nameOfCategory = document.querySelectorAll(".item > h2")

nameOfCategory.forEach((name, idx) => {
    
    console.log(`Category: ${name.textContent}`)
    const elementsLength = document.querySelectorAll('.item > ul')
    console.log(`Elements: ${elementsLength[idx].children.length}`)

})
