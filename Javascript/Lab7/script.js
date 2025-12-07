const sampleText = document.getElementById('sampleText');
let fontSize = 16; // initial

document.getElementById('bgColorBtn').addEventListener('click', () => {
    sampleText.style.backgroundColor = 'yellow';
});

document.getElementById('fontSizeBtn').addEventListener('click', () => {
    fontSize += 2;
    sampleText.style.fontSize = fontSize + 'px';
});

document.getElementById('centerBtn').addEventListener('click', () => {
    sampleText.style.textAlign = 'center';
});

document.getElementById('resetBtn').addEventListener('click', () => {
    sampleText.style.backgroundColor = '';
    sampleText.style.fontSize = '';
    sampleText.style.textAlign = '';
    fontSize = 16;
});