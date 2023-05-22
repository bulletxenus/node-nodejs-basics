const parseArgs = () => {
    process.argv.slice(1).map((el, idx, arr) => {
        if (idx % 2) {
            console.log(`${arr[idx]} is ${arr[idx + 1]}`)
        }
    })
};

parseArgs();
