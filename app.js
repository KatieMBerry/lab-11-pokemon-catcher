// import functions and grab DOM elements
// import { pokeData } from './Data/poke-data';

const encountered = document.querySelector('#encountered');
const caught = document.querySelector('#caught');
const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
console.log(radios);

// initialize state
let plays = 0;
const encounteredPoke = pokeData.slice();
const capturedPoke = [];

// set event listeners to update state and DOM

function getRandomPoke(someArray) {
    const index = Math.floor(Math.random()) * someArray.length;
}