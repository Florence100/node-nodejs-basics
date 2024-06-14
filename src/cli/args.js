const parseArgs = () => {
    const args = process.argv;
    let result = '';

    for (let i=2; i < args.length; i+=2) {
        const key = args[i].replace('--', '');
        const value = args[i + 1];
        if (i < args.length - 3) {
            result += `${key} is ${value}, `
        } else {
            result += `${key} is ${value}`
        }
    }
    console.log(result);
};

parseArgs();