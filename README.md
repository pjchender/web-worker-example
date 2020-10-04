# simple web worker example

This repository is forked from [simple-web-worker](https://github.com/mdn/simple-web-worker) @ MDN.

- Provide CPU intensive task (do not use `console.log` as CPU intensive task, cause `console.log` may process in another thread of browser)
- use `if (window.Worker)` 或 `if (!window.Worker)` to use web worker feature or not.

## Demo

```bash
$ parcel index.html
```
