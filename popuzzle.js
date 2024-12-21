// function to split the poem into individual words,
// then push them into the puzzle-container div through a forEach
// loop ... assign each word an id based on its index ... assign
// the textContent of the wordDiv to a word, then add each word
// into the container div 


// const button = document.getElementById("playButton");
// button.addEventListener("click", function () {
//     this.style.display = "none";
//     playPoemPuzzle()
// });

// function playPoemPuzzle() {  <- tried to use a funtion, and hide the button
// but i couldn't get all the parts to work at the same time
// using backticks to preserve all the emdashes
    const poem = `Autumn — overlooked my Knitting — 
Dyes — said He — have I — 
Could disparage a Flamingo — 
Show Me them — said I — 

Cochineal — I chose — for deeming 
It resemble Thee — 
And the little Border — Dusker — 
For resembling Me — `;

    const words = poem.split(" ");  // split the poem into words (so glad we practiced this!)
    const container = document.getElementById('puzzle-container'); // initialize "container" to store the location of the puzzle div

    // get container dimensions ... BOM methods YAY!
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // function to generate a random position within the container 
    const getRandomPosition = (max) => Math.floor(Math.random() * max);

    // loop through each word and create a div element ... forEach?
    words.forEach((word, index) => {
        let wordDiv = document.createElement('div');
        wordDiv.className = 'word';  // add class 
        wordDiv.id = `word${index + 1}`;  // set id based on index
        wordDiv.textContent = word;  // set the text content 

        // set random position for each word 
        let randomX = getRandomPosition(containerWidth - wordDiv.offsetWidth);
        let randomY = getRandomPosition(containerHeight - wordDiv.offsetHeight);
        wordDiv.style.left = `${randomX}px`;
        wordDiv.style.top = `${randomY}px`

        container.appendChild(wordDiv); // add each word <-- SCARY
        // console.log(wordDiv); IT TOTALLY WORKED

    });
    

// console.log(document.getElementById('puzzle-container');

// }

// below is how the words can be grabbed and moved around the play area

// The DOMContentLoaded event fires when the HTML document has been 
// completely parsed, and all deferred scripts (<script defer src="…"> 
// and <script type="module">) have downloaded and executed. It 
// doesn't wait for other things like images, subframes, and async 
// scripts to finish loading. - mdn
document.addEventListener('DOMContentLoaded', (event) => {
    const words = document.querySelectorAll('.word');
    let selectedWord = null;
    let offsetX, offsetY;

    words.forEach(word => {
        word.addEventListener('mousedown', (e) => {
            selectedWord = e.target;
            offsetX = e.clientX - selectedWord.offsetLeft;
            offsetY = e.clientY - selectedWord.offsetTop;
            selectedWord.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (selectedWord) {
                selectedWord.style.left = (e.clientX - offsetX) + 'px';
                selectedWord.style.top = (e.clientY - offsetY) + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            if (selectedWord) {
                selectedWord.style.cursor = 'grab';
                selectedWord = null;
            }
        });
    });
});
