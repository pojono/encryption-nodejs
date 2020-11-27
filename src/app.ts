const express = require('express');
const fs = require('fs');
const { createDecryptStream, setPassword } = require('./lib');

const { generatePassword } = require('./lib');
console.log(generatePassword().toString('hex'));

setPassword(Buffer.from('f8647d5417039b42c88a75897109049378cdfce528a7e015656bd23cd18fb78a', 'hex'));

const app = express();
app.get('/', (req: any, res: any) => {
    const readStream = fs.createReadStream('series.mkv');
    readStream.pipe(createDecryptStream(res));
});

app.listen(3000);
