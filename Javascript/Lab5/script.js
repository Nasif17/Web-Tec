const analyzeBtn = document.getElementById('analyzeBtn');
const textInput = document.getElementById('textInput');
const resultsDiv = document.getElementById('results');

analyzeBtn.addEventListener('click', () => {
    const text = textInput.value;
    const charCount = text.length;
    const words = text.trim() === '' ? [] : text.trim().split(/\s+/);
    const wordCount = words.length;
    const reversed = text.split('').reverse().join('');
    resultsDiv.innerHTML = `
        <p><strong>Total Characters:</strong> ${charCount}</p>
        <p><strong>Total Words:</strong> ${wordCount}</p>
        <p><strong>Reversed Text:</strong> ${reversed}</p>
    `;
});