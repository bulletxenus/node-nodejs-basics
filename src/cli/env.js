import process from 'node:process'
const parseEnv = () => {
    const envs = process.env
    const regExp = new RegExp(/RSS_/g)
    Object.keys(envs)
        .filter(el => el.match(regExp))
        .forEach(key => {
            console.log(`${key}=${envs[key]}`)
        })
};

parseEnv();
