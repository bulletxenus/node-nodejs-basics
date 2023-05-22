import fs from "fs/promises";
import {fileURLToPath} from "url";
import {dirname} from 'path'

const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/files/fileToRead.txt'

const read = async () => {
    try {
        const data = await fs.readFile(SOURCE_PATH, {encoding: 'utf-8'})
        console.log(data)
    } catch (e) {
        throw new Error('FS operation failed')
    }

};

await read();
