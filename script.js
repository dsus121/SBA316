console.log('is this thing on?')

function displayGreeting(event) {
    event.preventDefault();
    const name = document.getElementById('name').value; // get the user's name
    document.getElementById('greeting').innerHTML = `Happy knitting, ${name}`; 
    // document.querySelector("form").reset();
}
let letsGo = document.querySelector("form")
console.log(letsGo)
console.log(letsGo.name)

let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
    count = count + 1
    countEl.textContent = count
}


let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

// add in a button to change the colors of the count

"reset-btn"
let resetEl = document.getElementById("reset-el")
console.log(resetEl)
// confirm('Are you sure?')

function reset(){
    let countStr = 0
    saveEl.textContent = 0
    console.log(count)
    alert('you have reset your counter')
}