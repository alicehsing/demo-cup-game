// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const cupOne = document.getElementById('cup-one-img');
const cupTwo = document.getElementById('cup-two-img');
const cupThree = document.getElementById('cup-three-img');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');

// initial state, setting a let variable so it can be changed later on
const randomCupNumber = [0, 1, 2];

let correctGuesses = 0;
let totalGuesses = 0;

// User clicks any of the three cup buttons -> set event listeners 
buttonOne.addEventListener('click', () => {

    const correctCup = getRandomItem(randomCupNumber);
    const userGuess = 0;

    handleGuesses(userGuess, correctCup);

});

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function resetImages() {
    cupOne.src = './assets/cup.png';
    cupTwo.src = './assets/cup.png';
    cupThree.src = './assets/cup.png';
}

function handleGuesses(userGuess, correctCup) {
     // should reset the images
    resetImages();
     // increment total guesses
    totalGuesses++;

    const cupImgIds = [
        'cup-one-img',
        'cup-two-img',
        'cup-three-img'
    ];

    const correctImageEl = document.getElementById(cupImgIds[correctCup]);

    correctImageEl.src = './assets/correct-cup.png';
 
    if (userGuess === correctCup) {
        correctGuesses++;
    }

// update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;

}