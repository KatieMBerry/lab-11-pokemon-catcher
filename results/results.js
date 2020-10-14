
const resultH2 = document.querySelector('#results');
const clearButton = document.querySelector('button');

// console.log(clearButton, resultH2);



// const pokeCart = [
//     {
//         id: 'Charizard',
//         captured: 12
//     },
//     {
//         id: 'Squirtle',
//         captured: 19
//     },
//     {
//         id: 'Butterfree',
//         captured: 15
//     },
//     {
//         id: 'Weedle',
//         captured: 9
//     },
//     {
//         id: 'Kakuna',
//         captured: 12
//     },
//     {
//         id: 'Bulbasaur',
//         captured: 9
//     }
// ];
var ctx = document.getElementById('myChart').getContext('2d');

const pokeNums = [12, 19, 3, 5, 2, 3];
const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'lightsteelblue',
    'lavender',
    'yellow',
    'blue',
    'coral',
    'pink',
    'orange',
    'cayan'
];

const borders = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

const labels = ['Charizard', 'Squirtle', 'Weedle', 'Kakuna', 'Bulbasaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Beedrill', 'Pidgey'];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Pokemon Caught',
            data: pokeNums,
            backgroundColors: colors,
            borderColor: borders,
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

