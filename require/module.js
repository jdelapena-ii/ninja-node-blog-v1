// The Global Object
// console.log(global);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000)

setTimeout(() => {
    console.log('hello from setTimeout')
    clearInterval(int)
}, 5000);


console.log(__dirname);
console.log(__filename)


// Module and Require