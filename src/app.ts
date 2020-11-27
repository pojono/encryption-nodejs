const express = require('express');
const fs = require('fs');
const { createDecryptStream, setPassword } = require('./lib');

import { Request, Response } from 'express';
import fileUpload, { UploadedFile } from "express-fileupload";
import path from 'path';
import { checkFile } from './lib';

const util = require('util');
const writeFile = util.promisify(fs.writeFile);

setPassword(Buffer.from('f8647d5417039b42c88a75897109049378cdfce528a7e015656bd23cd18fb78a', 'hex'));

const app = express();
app.use(fileUpload({
    uploadTimeout: 0,
}));
app.get('/raw/:id', (req: any, res: any) => {
    const file = path.join(__dirname, '..', './files/',req.params.id);
    const readStream = fs.createReadStream(file);
    readStream.pipe(res);
});
app.get('/aes/:id', (req: any, res: any) => {
    const file = path.join(__dirname, '..', './files/',req.params.id);
    const readStream = fs.createReadStream(file);
    readStream.pipe(createDecryptStream(res));
});
app.post("/upload", async (req: Request, res: Response) => {
    if (!req.files || !checkFile(req.files)) {
        return res.status(400).end("Please upload correct file");
    }
    try {
        const file: UploadedFile = req.files.file as UploadedFile;
        await writeFile('./files/' + file.name, file.data);
    } catch (err) {
        console.log(err);
    }
    res.json({ result: 'ok'});
});
app.listen(3000);
