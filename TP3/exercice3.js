function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return new Promise((resolve, reject) => {

        if (Math.abs(age.getUTCFullYear - 1970) >= 18) {
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
    console.error('la personne est mineur')
}

const promise3 = getAge();
getAge.then(resolve, reject);