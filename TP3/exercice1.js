function mot(mot) {
    return new Promise((resolve, reject) => {
        if (mot.length >= 20) {
            resolve();
        } else {
            reject();
        }
    });
}

function resolve() {
    return true;
}

function reject() {
    console.error('le mot a plus de 20 caractères')
}

const promise = mot("totototototototototo");
promise.then((value) => {
    console.log(mot('totototototototototo'));
    return Promise.reject('zut !');
}).catch((e) => {
    console.log(e);
}).then((e) => {
    console.log('après le catch, la chaîne est restaurée');
});