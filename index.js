"use strict";
// src/index.ts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sum-form');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const sum = num1 + num2;
        resultDiv.textContent = `The sum is: ${sum}`;
    });
});
