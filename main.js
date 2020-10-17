import { calculate } from './cpu-intensive';

const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

if (!window.Worker) {
  const myWorker = new Worker(`./worker.js`);

  first.addEventListener('input', (e) => {
    myWorker.postMessage([first.value, second.value]);
  });

  second.addEventListener('input', () => {
    myWorker.postMessage([first.value, second.value]);
  });

  myWorker.addEventListener('message', (e) => {
    result.textContent = e.data;
  });
} else {
  first.addEventListener('input', () => {
    const data = calculate(first.value, second.value);
    result.textContent = data;
  });

  second.addEventListener('input', () => {
    const data = calculate(first.value, second.value);
    result.textContent = data;
  });
}

first.addEventListener('keydown', (e) => {
  e.target.style.outlineColor = '#de4463';
});

first.addEventListener('keyup', (e) => {
  e.target.style.outlineColor = 'transparent';
});

second.addEventListener('keydown', (e) => {
  e.target.style.outlineColor = '#de4463';
});

second.addEventListener('keyup', (e) => {
  e.target.style.outlineColor = 'transparent';
});
