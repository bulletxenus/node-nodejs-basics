import { Transform, } from 'stream'

const transform = async () => {
    const readStream = process.stdin
    const writeStream = process.stdout

    const transformStream = new Transform({ encoding: 'utf-8', decodeStrings: true,
        transform(chunk, encoding, callback) {
            const reversedString = `${chunk.toString().split('').reverse().join('')}\r\n`
            this.push(reversedString)
            callback()
        }
    })

    readStream.pipe(transformStream).pipe(writeStream)

};

await transform();
