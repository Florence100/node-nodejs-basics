import fs from 'fs';

const remove = async () => {
    const fileIsExist = fs.existsSync('files/fileToRemove.txt');
    if (!fileIsExist) {
        throw new Error('FS operation failed');
    } else {
        fs.unlink('files/fileToRemove.txt', function(err) {
            if (err) throw err;
        });
    }

};

await remove();