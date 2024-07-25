import { fork, spawn} from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const pathToFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = fork(pathToFile, args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
