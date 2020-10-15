import { getFromLocalStorage, POKES } from './utils.js';

const myArray = getFromLocalStorage(POKES);
const onlyCaptures = myArray.filter((item) => {
    return item.captured !== 0;
})

const pokeName = onlyCaptures.map((item) => {
    return item.name;
});

const encountered = onlyCaptures.map((item) => {
    return item.encountered;
});

const captured = onlyCaptures.map((item => {
    return item.captured;
}));

export function renderPokeTable(pokeItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdEncounters = document.createElement('td');
    const tdCaptures = document.createElement('td');

    tdName.textContent = pokeItem.name;
    tdEncounters.textContent = pokeItem.encountered;
    tdCaptures.textContent = pokeItem.captured;

    tr.append(tdName, tdEncounters, tdCaptures);
    return tr;
}

const table = document.querySelector('tbody');

for (let i = 0; i < myArray.length; i++) {
    const pokeCartItem = myArray[i];
    const tr = renderPokeTable(pokeCartItem);

    table.appendChild(tr);
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Number of Encounters',
            data: encountered,
            backgroundColor: '#FF0000',
            borderColor: '#3B4CCA',
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Number of Captured',
            data: captured,
            backgroundColor: '#3B4CCA',
            borderColor: '#FF0000',
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



