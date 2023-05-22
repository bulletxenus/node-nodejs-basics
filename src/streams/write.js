import fs from "fs";
import rl from 'readline'
import {fileURLToPath} from "url";
import { dirname} from "path";


const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/files/fileToWrite.txt'

const write = async () => {
    const writable = fs.createWriteStream(SOURCE_PATH, {encoding: 'utf-8', flags: 'a'})
    const readable = rl.createInterface(process.stdin)

    readable.on('line', (line)=> {
        writable.write(`${line}\r\n`)
    })
};

await write();
