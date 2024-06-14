import fs from 'fs';

const list = async () => {
    const filesIsExist = fs.existsSync('files');
    if (!filesIsExist) throw new Error('FS operation failed');

    fs.readdir('files', 'utf8', (err, files) => {
        if (err) throw err;
        console.log(files);
    })
};

await list();