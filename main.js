import { calculate } from './cpu-intensive';

const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

let enableWebWorker = false;
const myWorker = new Worker(`./worker.js`);

first.addEventListener('input', (e) => {
  if (enableWebWorker) {
    myWorker.postMessage([first.value, second.value]);
  } else {
    const data = calculate(first.value, second.value);
    result.textContent = data;
  }
});

second.addEventListener('input', () => {
  if (enableWebWorker) {
    myWorker.postMessage([first.value, second.value]);
  } else {
    const data = calculate(first.value, second.value);
    result.textContent = data;
  }
});

myWorker.addEventListener('message', (e) => {
  result.textContent = e.data;
});

/* highlight the outline when user input */
const formElem = document.querySelector('#form');
formElem.addEventListener('keydown', (e) => {
  if (e.target && e.target.matches('input')) {
    e.target.style.outlineColor = '#de4463';
  }
});

formElem.addEventListener('keyup', (e) => {
  if (e.target && e.target.matches('input')) {
    e.target.style.outlineColor = 'transparent';
  }
});

/* switch button */
const switchInput = document.querySelector('.switch-input');
const switchText = document.querySelector('.switch-text');
switchInput.addEventListener('change', (e) => {
  const { checked } = e.target;
  if (checked) {
    switchText.dataset.text = 'Web Worker On';
    enableWebWorker = true;
  } else {
    switchText.dataset.text = 'Web Worker Off';
    enableWebWorker = false;
  }
});
