const fs = require("fs");

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString()); // async
// })

// console.log('not async');

// write files
// fs.writeFile('./docs/blog12.txt', 'another text to okay okay', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('new text was written')
// })

// make directory
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log("folder created");
    }
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
  });
}
