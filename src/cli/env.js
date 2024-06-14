const parseEnv = () => {
    const env = process.env;
    const filteredEnv = Object.entries(env).filter((arr) => {
        const key = arr[0]
        return key.startsWith('RSS_');
    });
    filteredEnv.forEach((env) => {
        console.log(`${env[0]}=${env[1]}`);
    })
};

parseEnv();