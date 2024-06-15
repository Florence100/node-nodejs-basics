import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(currentDir, 'files/fileToRead.txt');
    const fileIsExist = fs.existsSync(pathToFile);
    if (!fileIsExist) throw new Error('FS operation failed');

    fs.readFile(pathToFile, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    })
};

await read();