'use strict';
const rangeInput = document.querySelector('#range');
const container = document.querySelector('.container');

rangeInput.addEventListener('change', (event) => {
    container.style.filter = `brightness(${event.target.value}%)`;
    localStorage.setItem('value', JSON.stringify(event.target.value))
});

window.addEventListener('load', (el) => {
    let sliderValue = JSON.parse(localStorage.getItem('value'));
    container.style.filter = `brightness(${sliderValue}%)`;
    rangeInput.value = sliderValue;

})