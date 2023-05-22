import fs from "fs/promises";
import {dirname} from 'path'
import {fileURLToPath} from "url";

const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/files/fileToRemove.txt'

const remove = async () => {
    try {
        const isDirectory = (await fs.stat(SOURCE_PATH)).isDirectory()

        if (isDirectory) {
            await fs.rmdir(SOURCE_PATH)
        } else {
            await fs.rm(SOURCE_PATH)
        }
    } catch (e) {
            throw new Error( e)
    }
};

await remove();
