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
// confirm('Are you sure?')

function reset(){
    let countStr = 0
    saveEl.textContent = 0
    console.log(count)
    alert('you have reset your counter')
}

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

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    } else {
        document.getElementById('emailError').textContent = '';
    }
}
console.log(email)

function getLocation() {
    // fun little BOM method
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("location").innerHTML = `Latitude: ${lat}, Longitude: ${lon}`;
        openMap(latitude, longitude);
    }
    function openMap(lat, lon) {
        const mapUrl = `https://www.google.com/maps?q=${lat},${lon}&z=10`; // `z=15` is zoom level
        window.open(mapUrl, '_blank');
    }
}



// createElement
// function createNewElement() {
//     currentLocation = ""
//     const newDiv = document.createElement('div');
//     newDiv.textContent = currentLocation;
//     newDiv.classList.add('specialDiv'); // adding a class for styling
//     document.body.appendChild(newDiv); // append (add) this new div to the body
// }

let div = document.createElement('div');
div.id = 'con';
div.style.cssText = "width:auto; height:200px; Background: rgb(42, 42, 42)";

document.body.appendChild(div);

// createNewElement()
// console.log(currentLocation)
