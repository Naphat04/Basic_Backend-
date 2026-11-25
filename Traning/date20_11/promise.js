function simulateTimeOut(text ,timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text === 'D') return reject('D get rejected');
            console.log(text);
            resolve();
        }, timeout);
    })
} 

// call function 
simulateTimeOut('A', 1000) 
    .then(() => {
        return simulateTimeOut('B', 500)
    })
    .then(() => {
        return simulateTimeOut('D', 700)
    })
    .then(() => {
        return simulateTimeOut('C', 200)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Finished');
    })