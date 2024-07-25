import { Worker } from 'worker_threads';
import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const pathToWorker = path.join(__dirname, 'worker.js');
const cpuCore = cpus().length;

const performCalculations = async () => {
    const promises = [];
    let startNum = 10;

    for (let i = 0; i < cpuCore; i ++) {
        promises.push(
            new Promise(function(resolve, reject) {
                const worker = new Worker(pathToWorker, {workerData: {num: startNum}});
                worker.on('message', (result) => {
                    const data = {
                        status: 'resolved',
                        data  : result
                    }
                    resolve(data);
                })
                worker.on('error', (err) => {
                    const data = {
                        status: 'error',
                        data  : null
                    }
                    reject(data);
                })
            })
        )
        startNum += 1;
    }

    const result = (await Promise.allSettled(promises)).map((x => x.value || x.reason));
    console.log(result);
    process.exit(0);
};

await performCalculations();