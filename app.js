// import functions and grab DOM elements
import { pokeData } from './data/poke-data.js';
import { findByName } from './utils.js';
// import { findByName, refreshGame } from '../utilsjs';

const headerNames = document.querySelectorAll('.poke-name');
const playsDiv = document.querySelector('#plays');
const trackingDiv = document.querySelector('#tracking');
const encounteredDiv = document.querySelectorAll('#encountered');
const caughtDiv = document.querySelectorAll('#caught');
const images = document.querySelectorAll('label > img');
//This makes an array of 3 inputs and we'll need to inject values later
const radios = document.querySelectorAll('input');
// const nextButton = document.querySelector('next-button');

// initialize state
let playsCounter = 0;
let caughtCounter = 0;
let encounterCounter = 0;
const pokeBag = [];

// refreshGame(pokeBag);
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
    headerNames[0].textContent = pokeOne.pokemon;
    

    radios[1].value = pokeTwo.pokemon;
    images[1].src = pokeTwo.url_image;
    headerNames[1].textContent = pokeTwo.pokemon;

    radios[2].value = pokeThree.pokemon;
    images[2].src = pokeThree.url_image;
    headerNames[2].textContent = pokeThree.pokemon;

    //to do: increment three encountered, 
    //go into data model to find each by id
    //if they are in this array, increment the encountered, 
    //if not push new object into data model
    
    encounterCounter++;

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

// function addNewEncounter(someArray, someName) {
//     const result = findByName(pokeData, someName);
//     const capturedPoke = {
//         pokemon: result.pokemon, 
//         encountered: 0,
//         captured: 0
//     };
//     someArray.push(capturedPoke);
// }

// function incrementCaptured(someArray, someName) {
//     let result = findByName(someArray, someName);
//     if (!result) {
//         addNewEncounter(someArray, someName);
//         result = findByName(someArray, someName);
//     } 
//     result.captured++;
// }

// function incrementEncountered(someArray, someName) {
//     let result = findByName(someArray, someName);
//     if (!result) {
//         addNewEncounter(someArray, someName);
//         result = findByName(someArray, someName);
//     } 
//     result.encountered++;
// }

//set event listeners to update state & dom; each radio needs an event listener
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        // e.preventDefault();

        playsCounter++;
        caughtCounter++;
        
        // console.log(e.target.value); will return the name of the pokemon clicked
        const captured = e.target.value;
        // incrementCaptured(pokeBag, captured);
        // incrementEncountered(pokeBag, encountered);
        
        // console.log(pokeBag);

        caughtDiv.textContent = `${caughtCounter}`;
        encounteredDiv.textContent = `${encounterCounter}`;
        trackingDiv.textContent = `You caught a ${captured}!`;
        playsDiv.textContent = `Plays: ${playsCounter}`;
        setUpGame();
        if (playsCounter > 10) {
            alert('You are out of plays!');
            window.location.href = './results/index.html';
        }
    });
}

