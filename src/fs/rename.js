import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pathToWrongFile = path.join(currentDir, 'files/wrongFilename.txt');
    const pathToProperFile = path.join(currentDir, 'files/properFilename.md');
    const wrongFileIsExist = fs.existsSync(pathToWrongFile);
    const properFileIsExist = fs.existsSync(pathToProperFile);
    if (!wrongFileIsExist || properFileIsExist) {
        throw new Error('FS operation failed');
    } else {
        fs.rename(pathToWrongFile, pathToProperFile, function(err) {
            if(err) throw err;
        });
    }
};

await rename();