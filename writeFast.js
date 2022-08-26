// [x] Import fs package
const fs = require('fs');

// [x] wrap code in a self executing function
(async () => {
//    [x] Create writeStream, pass the new filename
    const writeStream = fs.createWriteStream('out.csv')

    console.time('Stream 1e8 lines of csv')

//    [x] Loop through the 1e8 times;
    for(let i = 0; i < 1e8; i++){
//      [] write to writeStream the amount (increment,1\n)
//      [x] save to an overWatermark const
        const overWatermark = writeStream.write(`${i},1\n`)
//          
//      [] If !overWatermark
        if(!overWatermark) {
//          [] wrap in a promise
            await new Promise((resolve) => {
//              [] once drain event is triggered, resolve the promise
                writeStream.once('drain', resolve)
            })
        }

    }

    writeStream.end()
    console.timeEnd('Stream 1e8 lines of csv')

})()
