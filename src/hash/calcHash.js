import {createHash} from 'crypto'
import fs from "fs";
import {fileURLToPath} from "url";
import {dirname}  from 'path'

const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const stream = fs.createReadStream(SOURCE_PATH)
    const hashObj = createHash('sha256').setEncoding('hex')
    await stream.pipe(hashObj)

    stream.on('end', function () {
        console.log(hashObj.read())
    })
};

await calculateHash();
