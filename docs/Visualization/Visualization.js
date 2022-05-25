const ctx = document.getElementById('doughnut').getContext('2d');
const ctxBar = document.getElementById('bar').getContext('2d');

const doughNut = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Isabella', 'Emma', 'Sophia', 'Mia', 'Camila', 'Luna', 'Valentine', 'Sofia', 'Victoria', 'Ava'],
        datasets: [{
            label: 'Most Popular Female Baby Names of 2019',
            data: [231, 213, 193, 184, 162, 154, 123, 115, 104, 101],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)', //red
                'rgba(255, 165, 0, 0.5)', //orange
                'rgba(255, 255, 0, 0.5)', //yellow
                'rgba(124, 252, 0, 0.5)', //lime
                'rgba(0, 255, 255, 0.2)', //aqua
                'rgba(0, 191, 255, 0.5)', //sky blue
                'rgba(138, 43, 226, 0.5)', //violet
                'rgba(255, 0, 255, 0.5)', //pink
                'rgba(119, 136, 153, 0.5)', //gray
                'rgba(0, 0, 0, 0.5)', //black

            ],
            borderColor: [
                'rgba(255, 0, 0, 1)', //red
                'rgba(255, 165, 0, 1)', //orange
                'rgba(255, 255, 0, 1)', //yellow
                'rgba(124, 252, 0, 1)', //lime
                'rgba(0, 255, 255, 1)', //aqua
                'rgba(0, 191, 255, 1)', //sky blue
                'rgba(138, 43, 226, 1)', //violet
                'rgba(255, 0, 255, 1)', //pink
                'rgba(119, 136, 153, 1)', //gray
                'rgba(0, 0, 0, 1)', //black
            ],
            borderWidth: 2
        }]
    },
    options: {
    }
});

const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Liam', 'Noah', 'Matthew', 'Sebastian', 'Dylan', 'Jacob', 'Ethan', 'Lucas', 'Jayden', 'Mateo'],
        datasets: [{
            label: 'Most Popular Male Baby Names of 2019',
            data: [423, 262, 242, 215, 212, 209, 195, 176, 172, 147],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)', //red
                'rgba(255, 165, 0, 0.5)', //orange
                'rgba(255, 255, 0, 0.5)', //yellow
                'rgba(124, 252, 0, 0.5)', //lime
                'rgba(0, 255, 255, 0.2)', //aqua
                'rgba(0, 191, 255, 0.5)', //sky blue
                'rgba(138, 43, 226, 0.5)', //violet
                'rgba(255, 0, 255, 0.5)', //pink
                'rgba(119, 136, 153, 0.5)', //gray
                'rgba(0, 0, 0, 0.5)', //black

            ],
            borderColor: [
                'rgba(255, 0, 0, 1)', //red
                'rgba(255, 165, 0, 1)', //orange
                'rgba(255, 255, 0, 1)', //yellow
                'rgba(124, 252, 0, 1)', //lime
                'rgba(0, 255, 255, 1)', //aqua
                'rgba(0, 191, 255, 1)', //sky blue
                'rgba(138, 43, 226, 1)', //violet
                'rgba(255, 0, 255, 1)', //pink
                'rgba(119, 136, 153, 1)', //gray
                'rgba(0, 0, 0, 1)', //black
            ],
            borderWidth: 2
        }]
    },
    options: {
    }
});