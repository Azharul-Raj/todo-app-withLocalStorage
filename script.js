// get text value from id
const getInput = (id) => {
    const inputField = document.getElementById(id)
    const inputText = inputField.value
    inputField.value = ``
    return inputText
}
// get from local storage function
const
// set to local storage function
// const setLocalStorage = ()
// display todo value
const display = () => {
    const toDoContainer = document.getElementById('todo-list')
    const toDoValue = getInput('todo-text')
    const li = document.createElement('li')
    li.innerHTML = `
    <div class="flex justify-between my-2">
      ${toDoValue}
      <button class="bg-green-400 px-2 rounded-lg text-white">Delete</button>
    </div>
     
    `
    toDoContainer.appendChild(li)
}

// plus btn event listener
const addItem = () => {
    display()
    
}
