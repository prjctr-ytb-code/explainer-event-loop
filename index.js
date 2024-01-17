/**
 * Example 1
 */
setTimeout(function timeout() {
    console.log('Timeout');
}, 0);

const promise = new Promise(function (resolve, reject) {
    console.log('Create promise');
    resolve();
});

promise.then(function () {
    console.log('Promise processing');
});

console.log('End');

/**
 * Example 2
 */
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

/**
 * Example 3
 */
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

/**
 * Example 4
 */
const myPromise = (delay) => new Promise((res, rej) => {
    setTimeout(res, delay)
})

setTimeout(() => {
    console.log('in setTimeout1');
}, 1000);
myPromise(1000).then((res) => {
    console.log('in Promise 1');
});
setTimeout(() => {
    console.log('in setTimeout2');
}, 100);
myPromise(2000).then((res) => {
    console.log('in Promise 2');
});
setTimeout(() => {
    console.log('in setTimeout3');
}, 2000);
myPromise(1000).then((res) => {
    console.log('in Promise 3');
});
setTimeout(() => {
    console.log('in setTimeout4');
}, 1000);
myPromise(5000).then((res) => {
    console.log('in Promise ')
});
