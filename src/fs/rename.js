import fs from "fs/promises";
import{dirname} from "path";
import {fileURLToPath} from "url";

const FILE_PATH = fileURLToPath(import.meta.url)
const DIR_PATH = dirname(FILE_PATH) + '/files'
const OLD_PATH = dirname(FILE_PATH) + '/files/wrongFilename.txt'
const NEW_PATH = dirname(FILE_PATH) + '/files/properFilename.md'

const rename = async () => {
    try {
        const files = await fs.readdir(DIR_PATH)

        if (files.includes('properFilename.md')) {
            new Error()
        }

        await fs.rename(OLD_PATH, NEW_PATH)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await rename();
