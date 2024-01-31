let autoclickerInterval;

document.getElementById('startButton').addEventListener('click', () => {
    startAutoClicker();
});

function startAutoClicker() {
    autoclickerInterval = setInterval(() => {
        // Your autoclicker logic goes here
        console.log('Clicking...');
    }, 1000); // Click every second as an example
}
