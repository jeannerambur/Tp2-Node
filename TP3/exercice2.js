function exo2(val1, val2) {
    return new Promise((resolve, reject) => {
        if (val1 >= val2) {
            resolve();
        } else {
            reject();
        }
    });
}

function resolve() {
    return val1 - val2;
}

function reject() {
    console.error('la deuxieme valeur est superieur à la première')
}

const myPromise = exo2();
myPromise.then(resolve, reject);