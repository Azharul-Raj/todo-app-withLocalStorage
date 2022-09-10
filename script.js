// let arr = []
// get text value from id
const getInput = (id) => {
    const inputField = document.getElementById(id)
    const inputText = inputField.value
    inputField.value = ``
    return inputText
}
// get from local storage function
const getArrFromStorage = () => {
    const saveValue = localStorage.getItem('value')
    let value = []
    if (saveValue) {
        value = JSON.parse(saveValue)
    }
    return value
}
// save value into the storage
const saveStorage = (element) => {
    const value = getArrFromStorage()
    value.push(element)
    const stringified = JSON.stringify(value)
    localStorage.setItem('value',stringified)
}

// display rendered value function
const displayToDocument = (toDoText) => {
    const toDoContainer = document.getElementById('todo-list')
    const li = document.createElement('li')
        li.innerHTML = `
        <div id="single" class="flex justify-between my-2">
          ${toDoText}
          <button onclick="removeItem('${toDoText}')" class="bg-green-400 px-2 rounded-lg text-white">Delete</button>
        </div>
        
        `
        toDoContainer.appendChild(li)   
}

// plus btn event listener
const addItem = () => {
    
    const toDoValue = getInput('todo-text')
    if (toDoValue != '') {
        displayToDocument(toDoValue)
        const stringifiedToDo =toDoValue 
        console.log(stringifiedToDo)
        saveStorage(stringifiedToDo)
 
        // if (localStorage.getItem('value')) {
        //     arr.push(stringifiedToDo)
        //     // let arr2 = arr
        //     console.log(arr)
        //     localStorage.setItem('value',JSON.stringify(arr))
        // }
        // else {
        //     localStorage.setItem('value',arr)
        // }
        }
    else {
        alert('PLEASE WRITE SOMETHING')
    }
}
// remove single item
const removeItem = (e) => {
    console.log('get it' + e)
    const stored = localStorage.getItem('value')
    const parsedArr = JSON.parse(stored)
    const filtered = parsedArr.filter(item => item != e)
    console.log(filtered)
    localStorage.setItem('value',JSON.stringify(filtered))
    const singleItem = document.getElementById('single')
    singleItem.parentNode.remove()
    
}

// render value to display
const render = () => {
    const storedArr = JSON.parse(localStorage.getItem('value'))
     
    if (storedArr) {
        storedArr.forEach(element => {
            displayToDocument(element)
        })
    }
    else {
        toDoContainer.innerHTML = ``
    }
}
// element clearing function
const clearAll = () => {
    localStorage.clear()
    render()
}
render()