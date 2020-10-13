// import functions and grab DOM elements
import { pokeData } from './data/poke-data.js';
// import { findById, getFromLocalStorage, setInLocalStorage } from './utilsjs';

const playsDiv = document.querySelector('#plays');
const encounteredDiv = document.querySelector('#encountered');
const caughtDiv = document.querySelector('#caught');
const images = document.querySelectorAll('label > img');
//This makes an array of 3 inputs and we'll need to inject values later
const radios = document.querySelectorAll('input');
const nextButton = document.querySelector('next-button');

// initialize state
let playsCounter = 0;
let caughtCounter = 0;
let encounterCounter = 0;
let pokeBag = [];
// const captured = document.querySelector(':checked');

// go grab three random pokes
function getRandomPoke(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

function setUpGame() {
    //call the random poke function
    let pokeOne = getRandomPoke(pokeData); 
    let pokeTwo = getRandomPoke(pokeData);
    let pokeThree = getRandomPoke(pokeData);
    // console.log(pokeOne, pokeTwo, pokeThree);
    // now, in the event that they are the same, keep trying until they are not:
    while (pokeOne.pokemon === pokeTwo.pokemon) {
        pokeOne = getRandomPoke(pokeData);
    }

    while (pokeTwo.pokemon === pokeThree.pokemon) {
        pokeTwo = getRandomPoke(pokeData);
    }

    while (pokeThree.pokemon === pokeOne.pokemon) {
        pokeTwo = getRandomPoke(pokeData);
    }

    //display the poke to the page (sets DOM):
    radios[0].value = pokeOne.pokemon;
    images[0].src = pokeOne.url_image;

    radios[1].value = pokeTwo.pokemon;
    images[1].src = pokeTwo.url_image;

    radios[2].value = pokeThree.pokemon;
    images[2].src = pokeThree.url_image;

    //to do: increment three encountered, 
    //go into data model to find each by id
    //if they are in this array, increment the encountered, 
    //if not push new object into data model
    //reset the game, clear the radio butons,
    // if (playsCounter === 11) {
    //     alert('You are out of plays!');
    //     window.location.href = '../results/index.html';
}
setUpGame();

//Show nextButton on click of image:
// function handleClick() {
//     nextButton.classList.toggle('hidden');

//     //disable the images:
//     for (let i = 0; i < radios.length; i++) {
//         radios[i].disabled = true;
//         images[i].style.opacity = .5;
//     }
// }

//set event listeners to update state & dom; each radio needs an event listener
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        // e.preventDefault();

        playsCounter++;
        caughtCounter++;
        encounterCounter++;
        // console.log(e.target.value); will return the name of the pokemon clicked
        const captured = e.target.value;
        pokeBag.push(captured);
        console.log(pokeBag);

        caughtDiv.textContent = `You caught a ${captured}! You've captured ${caughtCounter} Pokemon!`;
        encounteredDiv.textContent = `Encountered Pokemon: ${encounterCounter}`;
        playsDiv.textContent = `Plays: ${playsCounter}`;
        setUpGame();
    });
}

