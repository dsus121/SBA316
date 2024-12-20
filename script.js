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

// createElement
// <div><button id="changeColor-btn" onmouseover="changeColor()">Change the colors!</button>
function changeColor(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = '#0D090A';
    });
}
function resetColor(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = '';
    });
}

function sillyClick(){
    let img = document.getElementById("theCountImg");
    img.style.display = 'block';
    console.log('button clicked')
    // Hide the image after 3 seconds (3000ms)
    setTimeout(function() {
        img.style.display = 'none';
    }, 3000); // Change this duration to make it appear for a longer/shorter time
}