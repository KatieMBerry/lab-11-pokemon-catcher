// export function refreshGame()

export const POKES = 'POKES';


export function findByName(someArray, someName) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.name === someName) {
            return item;
        }
    }
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

// this function will not return anything
export function setInLocalStorage(key, productArray) {
    const stringyItem = JSON.stringify(productArray);
    localStorage.setItem(key, stringyItem);
    return productArray;
}

