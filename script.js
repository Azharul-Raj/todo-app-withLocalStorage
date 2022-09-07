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

// plus btn event listener
const addItem = () => {
    const toDoContainer = document.getElementById('todo-list')
    const toDoValue = getInput('todo-text')
    if (toDoValue != '') {
        const li = document.createElement('li')
        li.innerHTML = `
        <div id="single" class="flex justify-between my-2">
          ${toDoValue}
          <button onclick="removeItem('${toDoValue}')" class="bg-green-400 px-2 rounded-lg text-white">Delete</button>
        </div>
        
        `
        toDoContainer.appendChild(li)   
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
    const toDoContainer = document.getElementById('todo-list') 
    const toDoValue = getInput('todo-text')
    if (storedArr) {
        storedArr.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML = `
            <div id="single" class="flex justify-between my-2">
              ${element}
              <button onclick="removeItem('${toDoValue}')" class="bg-green-400 px-2 rounded-lg text-white">Delete</button>
            </div>
            
            `
            toDoContainer.appendChild(li)
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