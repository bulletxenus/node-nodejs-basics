import fs from "fs";
import zlib from 'zlib'
import {fileURLToPath} from "url";
import {dirname} from "path";

const DIR_PATH = dirname(fileURLToPath(import.meta.url))
const INPUT_PATH = DIR_PATH + '/files/fileToCompress.txt';
const OUTPUT_PATH = DIR_PATH + '/files/archive.gz'

const compress = async () => {
    const read =  fs.createReadStream(INPUT_PATH)
    const write =  fs.createWriteStream(OUTPUT_PATH)

    const compress = zlib.createGzip()

    read.pipe(compress).pipe(write)
};

await compress();
