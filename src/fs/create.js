import fs from "fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const FILE_PATH = fileURLToPath(import.meta.url)
const OUTPUT_PATH = path.dirname(FILE_PATH) + '/files/fresh.txt'
const DATA = 'I am fresh and young';
const OPTIONS = {flag: 'wx'}

const create = async () => {
    try {
        await fs.writeFile(OUTPUT_PATH, DATA, OPTIONS)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await create();
