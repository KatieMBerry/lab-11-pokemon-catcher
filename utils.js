export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        } 
    } 
}

export function getFromLocalStorage(key) {
    const pokeItem = localStorage.getItem(key);
    return JSON.parse(pokeItem);
}

// this function will not return anything
export function setInLocalStorage(PRODUCTS, productArray) {
    const stringyItem = JSON.stringify(productArray);
    localStorage.setItem(PRODUCTS, stringyItem);
    return productArray;
}