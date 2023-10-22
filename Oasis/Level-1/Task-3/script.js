const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const converter = document.getElementById('converter');
const result = document.querySelector('.result');
const C = document.querySelector('.C');

let currentMode = 'C';

convertButton.addEventListener('click', () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "yellow";

        if (currentMode === 'C') {
            let valueF = (converter.value * 1.8) + 32;
            let valueK = parseFloat(converter.value) + 273.15;
            result.innerHTML = `${converter.value}°C to ${valueF.toFixed(2)}°F to ${valueK.toFixed(2)}K`;
        } else if (currentMode === 'F') {
            let valueC = (converter.value - 32) / 1.8;
            let valueK = (converter.value - 32) / 1.8 + 273.15;
            result.innerHTML = `${converter.value}°F to ${valueC.toFixed(2)}°C to ${valueK.toFixed(2)}K`;
        } else if (currentMode === 'K') {
            let valueC = converter.value - 273.15;
            let valueF = (converter.value - 273.15) * 1.8 + 32;
            result.innerHTML = `${converter.value}K to ${valueC.toFixed(2)}°C to ${valueF.toFixed(2)}°F`;
        }
        if (currentMode === 'C') {
            let valueF = (converter.value * 1.8) + 32;
            let valueK = parseFloat(converter.value) + 273.15;
            result.innerHTML = `${converter.value}°C to ${valueF.toFixed(2)}°F to ${valueK.toFixed(2)}K`;
        }
        
    } else {
        result.style.color = "red";
        result.innerHTML = "Invalid input. Please enter a valid number.";
    }
});

resetButton.addEventListener('click', () => {
    converter.value = '';
    result.textContent = '';
    result.style.color = "black";
});

changeButton.addEventListener('click', () => {
    if (currentMode === 'C') {
        C.innerHTML = '°F';
        currentMode = 'F';
    } else if (currentMode === 'F') {
        C.innerHTML = 'K';
        currentMode = 'K';
    } else {
        C.innerHTML = '°C';
        currentMode = 'C';
    }
});
