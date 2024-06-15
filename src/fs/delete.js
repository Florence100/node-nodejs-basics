import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(currentDir, 'files/fileToRemove.txt');
    const fileIsExist = fs.existsSync(pathToFile);
    if (!fileIsExist) {
        throw new Error('FS operation failed');
    } else {
        fs.unlink(pathToFile, function(err) {
            if (err) throw err;
        });
    }
};

await remove();