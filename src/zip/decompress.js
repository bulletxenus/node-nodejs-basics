import fs from "fs";
import zlib from "zlib";
import {dirname} from "path";
import {fileURLToPath} from "url";

const DIR_PATH = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = DIR_PATH + '/files/fileToCompress.txt';
const INPUT_PATH = DIR_PATH + '/files/archive.gz'

const decompress = async () => {
    const read = fs.createReadStream(INPUT_PATH)
    const write = fs.createWriteStream(OUTPUT_PATH)
    const decompress = zlib.createUnzip()

    read.pipe(decompress).pipe(write)
};

await decompress();
