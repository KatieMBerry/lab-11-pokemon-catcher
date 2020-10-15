import { getFromLocalStorage } from '../utils.js';

const localStoragePoke = getFromLocalStorage();
const clearGameButton = document.querySelector('button');


clearGameButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});