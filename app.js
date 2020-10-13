// import functions and grab DOM elements
import { pokeData } from '../Data/poke-data.js';

const encountered = document.querySelector('#encountered');
const caught = document.querySelector('#caught');
const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');

// initialize state
let plays = 0;
const encounteredPoke = pokeData.slice();
let capturedPoke = [];

// set event listeners to update state and DOM

function getRandomPoke(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

let pokeOne = getRandomPoke(pokeData); 
let pokeTwo = getRandomPoke(pokeData);
let pokeThree = getRandomPoke(pokeData);

while (pokeOne.id === pokeTwo.id) {
    pokeOne = getRandomPoke(pokeData);
}

while (pokeTwo.id === pokeThree.id) {
    pokeTwo = getRandomPoke(pokeData);
}

while (pokeThree.id === pokeOne.id) {
    pokeTwo = getRandomPoke(pokeData);
}
// console.log(pokeOne);