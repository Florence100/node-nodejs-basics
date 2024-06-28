import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { stdin, stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writableStream = createWriteStream(pathToFile);
    stdout.write("Please, type something end press 'Enter' \n");

    stdin.pipe(writableStream);
};

await write();