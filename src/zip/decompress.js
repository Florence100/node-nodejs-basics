import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream, createReadStream } from 'fs';
import zlib from 'node:zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const pathToSource = path.join(__dirname, 'files', 'archive.gz');
const pathToDistination = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const source  = createReadStream(pathToSource);
    const distination = createWriteStream(pathToDistination);
    const unzib = zlib.createUnzip();

    pipeline(source, unzib, distination, (err) => {
        if (err) throw err;
    })
};

await decompress();