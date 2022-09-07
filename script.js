let arr = []
// get text value from id
const getInput = (id) => {
    const inputField = document.getElementById(id)
    const inputText = inputField.value
    inputField.value = ``
    return inputText
}
// get from local storage function



// plus btn event listener
const addItem = () => {
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
    const stringifiedToDo =toDoValue 
    console.log(stringifiedToDo)
    
 
    if (stringifiedToDo) {
        arr.push(stringifiedToDo)
        //  arr2 = [...arr, stringifiedToDo]
        console.log(arr)
    }
    else {
        localStorage.setItem('value',arr)
    }
    localStorage.setItem('value',JSON.stringify(arr) )
}
// render value to display
const render = () => {
    const storedArr = JSON.parse(localStorage.getItem('value'))
    storedArr.forEach(element => {
        const toDoContainer = document.getElementById('todo-list') 
        const li = document.createElement('li')
        li.innerHTML = `
        <div class="flex justify-between my-2">
          ${element}
          <button class="bg-green-400 px-2 rounded-lg text-white">Delete</button>
        </div>
        
        `
        toDoContainer.appendChild(li)
    })
}
render()