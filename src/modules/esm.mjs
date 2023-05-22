import path from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import {fileURLToPath} from 'url'
import './files/c.js'
import a from './files/a.json' assert { type: 'json' }
import b from './files/b.json' assert { type: 'json' }

const FILE_NAME = fileURLToPath(import.meta.url)
const DIR_NAME = path.dirname(FILE_NAME)
const random = Math.random();

export const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${FILE_NAME}`);
console.log(`Path to current directory is ${DIR_NAME}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


