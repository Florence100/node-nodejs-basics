import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    try {
        const currentDir = dirname(fileURLToPath(import.meta.url));
        const pathToFile = path.join(currentDir, 'files/fresh.txt')
        const fileIsExist = fs.existsSync(pathToFile);
        if (!fileIsExist) {
            fs.writeFile(
                pathToFile, 
                'I am fresh and young', 
                (err) => {
                    if (err) throw err;
                }
            );
        } else {
            throw new Error('FS operation failed');
        }
    } catch (err) {
        throw err;
    }
};

await create();