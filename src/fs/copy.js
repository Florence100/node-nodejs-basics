import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pathToFiles = path.join(currentDir, 'files');
    const pathToCopyfiles = path.join(currentDir, 'files_copy');

    const filesCopyIsExist = fs.existsSync(pathToCopyfiles);
    if (filesCopyIsExist) {
        throw new Error('FS operation failed');
    } else {
        fs.mkdir(pathToCopyfiles, (err) => {
            if (err) throw err;
        })
    }

    fs.readdir(pathToFiles, 'utf8', (err, files) => {
        if (err) throw new Error('FS operation failed');
        
        for (let i = 0; i < files.length; i++) {
            const stream = fs.createReadStream(
                path.join(pathToFiles, files[i]),
                'utf8'
            )
            stream.on('data', (data) => {
                fs.writeFile(
                    `${pathToCopyfiles}/${files[i]}`,
                    data,
                    'utf8',
                    (err) => {
                        if (err) throw err;
                    }
                )
            })
        }
    });
};

await copy();
