import { createHash } from 'node:crypto';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(currentDir, 'files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');
    hash.on('readable', () => {
        const data = hash.read();
        if (data) {
            console.log(data.toString('hex'));
        }
    })

    fs.readFile(pathToFile, 'utf-8', (err, data) => {
        if (err) {
            hash.end();
            throw err;
        }
        hash.write(data);
        hash.end();
    })
};

await calculateHash();