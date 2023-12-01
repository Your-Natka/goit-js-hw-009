// Import library
import getRandomHexColor from './randomHexColor';

//Get button start/stop element
const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
// values
let timerId = null;

// Add event listener start/stop on btn start/stop
dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

dataStopRef.setAttribute('disabled', 'disabled');

// Function start event listener
function onStart() {
  timerId = setInterval(getBgColor, 1000);
  toggleDisabled();
}

// Function stop event listener
function onStop() {
  clearInterval(timerId);
  toggleDisabled();
}

function toggleDisabled() {
  dataStartRef.toggleAttribute('disabled');
  dataStopRef.toggleAttribute('disabled');
}

// Function set random bg color
function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}
