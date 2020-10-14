// import functions and grab DOM elements
import { pokeData } from '../data/poke-data.js';
import { findByName, setInLocalStorage, POKES } from './utils.js';


const headerNames = document.querySelectorAll('.poke-name');
const playsDiv = document.querySelector('#plays');
const trackingDiv = document.querySelector('#tracking');
const encounteredDiv = document.querySelectorAll('#encountered');
const caughtDiv = document.querySelectorAll('#caught');
const images = document.querySelectorAll('label > img');
//This makes an array of 3 inputs and we'll need to inject values later
const radios = document.querySelectorAll('input');


// initialize state
let playsCounter = 0;
const pokeBag = [];

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

    // now, in the event that they are the same, keep trying until they are not:
    while (pokeOne.pokemon === pokeTwo.pokemon || pokeTwo.pokemon === pokeThree.pokemon || pokeThree.pokemon === pokeOne.pokemon) {
        pokeOne = getRandomPoke(pokeData);
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

}
setUpGame();

//set event listeners to update state & dom; each radio needs an event listener
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        playsCounter++;
        //Encountered:
        //loop thru the radios to get their name
        //see if they exist in pokebag, if they exist, increment...if not initialize one
        radios.forEach((radio) => {
            let pokeItem = findByName(pokeBag, radio.value);
            if (!pokeItem) {
                pokeItem = {
                    name: radio.value,
                    encountered: 1,
                    captured: 0
                }
                //for new item, push the new object into pokebag
                pokeBag.push(pokeItem);
                //see if they exist in pokebag, if they exist, increment
            } else {
                pokeItem.encountered++;
            }

            // caughtDiv.textContent = `${pokeItem.captured.value}`;
            // encounteredDiv.textContent = `${pokeItem.encountered}`;
        });
        //Captured:
        //identify the poke in the bag by name
        let capturedPoke = findByName(pokeBag, e.target.value);
        capturedPoke.captured++;
        // console.log(capturedPoke);

        // console.log(e.target.value); will return the name of the pokemon clicked
        const captured = e.target.value;

        setInLocalStorage(POKES, pokeBag);
        console.log(setInLocalStorage);

        trackingDiv.textContent = `You caught a ${capturedPoke.name}!`;
        playsDiv.textContent = `Plays: ${playsCounter}`;
        setUpGame();
        if (playsCounter > 10) {
            alert('You are out of plays!');
            window.location.href = './results/index.html';
        }
    });
}

