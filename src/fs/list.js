import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(currentDir, 'files');
    const filesIsExist = fs.existsSync(pathToFile);
    if (!filesIsExist) throw new Error('FS operation failed');

    fs.readdir(pathToFile, 'utf8', (err, files) => {
        if (err) throw err;
        console.log(files);
    })
};

await list();