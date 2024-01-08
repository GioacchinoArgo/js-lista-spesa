console.log('JS OK');

// - 1

const shoppingListElement = document.getElementById('shopping-list')

// - 2 

const shoppingList = ['pasta', 'patate', 'cipolle', 'carote', 'sedano','vino']

// - 3

let listItems = '<ul>'

// - 4

let i = 0
while (i < shoppingList.length) {
    listItems += `<li>${shoppingList[i]}</li>`
    console.log(shoppingList[i])
    i++;
}

listItems += '</ul>'

// - 5 

shoppingListElement.innerHTML = listItems