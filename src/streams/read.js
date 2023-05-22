import fs from "fs";
import {fileURLToPath} from 'url'
import {dirname} from "path";

const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/files/fileToRead.txt'

const read = async () => {
    const stream = fs.createReadStream(SOURCE_PATH);

    stream.on('data', (data) => {
        process.stdout.write(data)
    })
};

await read();
