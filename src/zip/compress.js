import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const pathToSourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToDestinationFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(pathToSourceFile);
    const destination = createWriteStream(pathToDestinationFile);

    source.pipe(gzip).pipe(destination);
};

await compress();