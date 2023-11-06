const { people, places } = require('./people')

// console.log(req[0].name);
console.log(places, people);

const osModule = require('os')

console.log(osModule.constants.errno.EADDRINUSE)
console.log(osModule.platform())
console.log(osModule.machine())
console.log(osModule.version())
console.log(osModule.homedir())
console.log(osModule.hostname())