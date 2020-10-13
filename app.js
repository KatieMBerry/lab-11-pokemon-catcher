// import functions and grab DOM elements
import { pokeData } from '../data/poke-data.js';

const encountered = document.querySelector('#encountered');
const caught = document.querySelector('#caught');
const images = document.querySelectorAll('label > img');
//This makes an array of 3 inputs and we'll need to inject values later
const radios = document.querySelectorAll('input');

// initialize state
let plays = 0;
const encounteredPoke = pokeData.slice();
// const captured = document.querySelector(':checked');

// go grab three random pokes
function getRandomPoke(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

let pokeOne = getRandomPoke(pokeData); 
let pokeTwo = getRandomPoke(pokeData);
let pokeThree = getRandomPoke(pokeData);
console.log(pokeOne, pokeTwo, pokeThree);
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

//display the poke to the page:
radios[0].value = pokeOne.pokemon;
images[0].src = pokeOne.url_image;

radios[1].value = pokeTwo.pokemon;
images[1].src = pokeTwo.url_image;

radios[2].value = pokeThree.pokemon;
images[2].src = pokeThree.url_image;



