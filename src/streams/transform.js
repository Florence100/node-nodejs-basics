import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    stdout.write("Please, type something end press 'Enter' \n");

    class ReverseTransform extends Transform {
        _transform(chunc, encoding, callback) {
            try {
                const resultString = chunc.toString().split('').reverse().join('') + '\n';
                callback(null, resultString);
            } catch (err) {
                throw err;
            }
        }
    }

    const reverseTransform = new ReverseTransform();

    stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();