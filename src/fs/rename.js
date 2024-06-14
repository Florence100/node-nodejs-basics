import fs from 'fs';

const rename = async () => {
    const wrongFileIsExist = fs.existsSync('files/wrongFilename.txt');
    const properFileIsExist = fs.existsSync('files/properFilename.md');
    if (!wrongFileIsExist || properFileIsExist) {
        throw new Error('FS operation failed');
    } else {
        fs.rename('files/wrongFilename.txt', 'files/properFilename.md', function(err) {
            if(err) throw err;
        });
    }
};

await rename();