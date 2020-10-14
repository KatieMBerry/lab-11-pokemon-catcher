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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Number of Encounters',
            data: encountered,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
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
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
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