// Function to change the background color based on button clicked
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Add event listeners to each button
document.getElementById('red').addEventListener('click', function() {
    changeBackgroundColor('red');
});

document.getElementById('green').addEventListener('click', function() {
    changeBackgroundColor('green');
});

document.getElementById('blue').addEventListener('click', function() {
    changeBackgroundColor('blue');
});

document.getElementById('yellow').addEventListener('click', function() {
    changeBackgroundColor('yellow');
});

document.getElementById('purple').addEventListener('click', function() {
    changeBackgroundColor('purple');
});

document.getElementById('orange').addEventListener('click', function() {
    changeBackgroundColor('orange');
});
