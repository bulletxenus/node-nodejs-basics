import fs from "fs/promises";
import {fileURLToPath} from "url";
import path from "path";

const readDirectoryRecursive = async (path, dest) => {
    const dir = await fs.readdir(path)
    await fs.mkdir(dest)

    for (const el of dir) {
        const elPath = `${path}/${el}`
        const newDest = `${dest}/${el}`
        const info = await fs.stat(elPath)

        if (info.isDirectory()) {
            await readDirectoryRecursive(elPath, newDest)
        } else {
            await fs.copyFile(elPath, newDest)
        }
    }
}

const FILE_PATH = fileURLToPath(import.meta.url);
const SOURCE_PATH = path.dirname(FILE_PATH) + '/files';
const DESTINATION_PATH = path.dirname(FILE_PATH) + '/files_copy'

const copy = async () => {

    try {
        await readDirectoryRecursive(SOURCE_PATH, DESTINATION_PATH)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await copy();
