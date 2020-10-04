import 'regenerator-runtime/runtime';
import { calculate } from './cpu-intensive';
import { debounce } from 'lodash';

onmessage = debounce(function (e) {
  const result = calculate(e.data[0], e.data[1]);

  if (isNaN(result)) {
    postMessage('Worker: Please write two numbers');
  } else {
    const workerResult = 'Result: ' + result;
    postMessage(workerResult);
  }
}, 500);
