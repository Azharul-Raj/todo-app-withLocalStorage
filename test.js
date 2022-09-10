const addPrompt = () => {
    let result = prompt('Type a number')
    if (!isNaN(result)) {
        result = parseFloat(result)
        alert(result + 200)
    }
    else {
        alert('please write a number')
    }
}
const result = confirm('Do You Wanna See Your Website Location')
if (result === true) {
    //  go(window.location.href)
    window.location.replace("http://www.w3schools.com");
 }