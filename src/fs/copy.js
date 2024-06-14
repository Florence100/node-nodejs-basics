import fs from 'fs';
import path from 'path';

const copy = async () => {
    const filesCopyIsExist = fs.existsSync('files_copy');
    if (filesCopyIsExist) {
        throw new Error('FS operation failed');
    } else {
        fs.mkdir('files_copy', (err) => {
            if (err) throw err;
        })
    }

    fs.readdir('files', 'utf8', (err, files) => {
        if (err) throw new Error('FS operation failed');
        
        for (let i = 0; i < files.length; i++) {
            const stream = fs.createReadStream(
                path.join('files', files[i]),
                'utf8'
            )
            stream.on('data', (data) => {
                fs.writeFile(
                    `files_copy/${files[i]}`,
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
