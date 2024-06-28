import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    const stream = createReadStream(pathToFile);

    stream.pipe(stdout);
};

await read();