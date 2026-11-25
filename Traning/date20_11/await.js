function simulateTimeOut(text, timeout) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (text === 'D') return reject('D get rejected');
        console.log(text);
        resolve();

    }, timeout);
})
}

async function run() {
    try {
        await simulateTimeOut('A', 1000)
        await simulateTimeOut('B', 500)
        await simulateTimeOut('C', 100)
    } catch (error) {
        console.log(error)
    }
}

run()