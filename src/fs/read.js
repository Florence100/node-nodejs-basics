import fs from 'fs';

const read = async () => {
    const fileIsExist = fs.existsSync('files/fileToRead.txt');
    if (!fileIsExist) throw new Error('FS operation failed');

    fs.readFile('files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    })
};

await read();