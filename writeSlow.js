/**
 * We expect this to run out of memory, or something.
 * Didn't show an error? Update 8 to something higher.
 * See here: (1e8)
 */

// [x] TODO: import fs package
const fs = require('fs')

// [x] TODO: Define data, with initial headers
let data = ['name,cost']

// [x] TODO: Loop 1e8 or 100,000,000 times
for(let i = 0; i < 1e8; i++) {
    // [] TODO: push to data array, the `loopIncrement,1`
    data.push(`${i},1`)
}

// [x] TODO: write file, pass data that was joined by \n (new line)
//          filename, data
fs.writeFileSync('out-big-slow.csv', data.join('\n'))