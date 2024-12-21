console.log('%cis this thing on?','color: purple')

function greeting(event) {
    event.preventDefault();
    const name = document.getElementById('name').value; // get the user's name
    document.getElementById('greeting').innerHTML = `Happy knitting, ${name}`; 
    // document.querySelector("form").reset();
}
let letsGo = document.querySelector("form")
// console.log(letsGo)
// console.log(letsGo.name)

let count = 0
let countEl = document.getElementById("count-el")
// console.log(countEl)

function increment() {
    count = count + 1
    countEl.textContent = count
}


let saveEl = document.getElementById("save-el")
// console.log(saveEl)

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}


"reset-btn"
let resetEl = document.getElementById("reset-el")

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
        // document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    } else {
        // document.getElementById('emailError').textContent = '';
    }
}

function getLocation() {
    // fun little BOM method
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    } 
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("location").innerHTML = `Latitude: ${lat}, Longitude: ${lon}`;
    // openMap(lat, lon);
}
// function openMap(lat, lon) {
//     const mapUrl = `https://www.google.com/maps?q=${lat},${lon}&z=10`; // `z=15` is zoom level
//     window.open(mapUrl, '_blank');
// }


let div = document.createElement('div');
div.id = 'khan';
div.style.cssText = "width:auto; height:90px; Background: #250444; color:tan; font-size:10px;";
div.innerText = `"Women like to sit down with trouble - as if it were knitting."
 - Ellen Glasgow


 this div was created from the .js file `

document.body.appendChild(div);

