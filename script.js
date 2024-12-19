console.log('is this thing on?')

let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
    count = count + 1
    countEl.innerText = count
}
console.log(count)


let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}

"reset-btn"
let resetEl = document.getElementById("reset-el")
console.log(resetEl)

function reset(){
    let countStr = 0
    saveEl.innerText = 0
    console.log(count)
}