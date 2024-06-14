import fs from 'fs';

const create = async () => {
    try {
        const exist = fs.existsSync('files/fresh.txt');
        if (!exist) {
            fs.writeFile(
                'files/fresh.txt', 
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