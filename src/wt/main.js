import {Worker, } from 'worker_threads'
import {cpus} from 'os'
import {fileURLToPath} from "url";
import { dirname} from "path";

const FILE_PATH = fileURLToPath(import.meta.url)
const SOURCE_PATH = dirname(FILE_PATH) + '/worker.js'

const performCalculations = async () => {
    const res = await Promise.allSettled(cpus().map((_, index) =>
        new Promise((resolve, reject) => {
            const worker = new Worker(SOURCE_PATH, { workerData: { arg: 10 + index } })
            const workerResult = {
                status: null,
                data: null
            }

            worker.on("message", (message) => {
                workerResult.status = 'resolved';
                workerResult.data = message
                resolve(workerResult)
            })

            worker.on('error', () => {
                workerResult.status = 'error';
                workerResult.data = null
                reject(workerResult)
            })
        }
    )))

    const adaptedResult = res.map(promise => promise?.value ?? promise?.reason)
    console.log(adaptedResult)
};

await performCalculations();
