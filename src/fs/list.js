import fs from "fs/promises";
import {fileURLToPath} from "url";
import {dirname} from "path";

const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/files'

const list = async () => {
    try {
        const files = await fs.readdir(SOURCE_PATH)
        console.log(files)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await list();
