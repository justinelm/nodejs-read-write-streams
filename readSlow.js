/**
 * Error: ERR_STRING_TOO_LONG
 */

// [x] Import fs
const fs = require('fs');

// [x] store in a var a file read from readFileSync method, pass (filename, formatting)
const file = fs.readFileSync('out.csv', 'utf-8');

// [x] store lines in a var, trim all \n (whitespace, I guess) and split by \n
const lines = file.trim('\n').split('\n');

// [x] Remove the header we wrote earlier
lines.shift();

// [x] store the sum in a var, reduce lines by doing some complicated 'IDK' stuff
const sum = lines.reduce((acc, line) => {
    return acc + parseFloat(line.split(',')[1]);
}, 0);
// Sometimes yung buhay parang life, hehe katulad netong code, ambot kung anung ginagawa


// [x] log sum
console.log('sum', sum);