// src/index.ts

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sum-form') as HTMLFormElement;
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const sum = num1 + num2;

        resultDiv.textContent = `la suma es: ${sum}`;
    });
});
