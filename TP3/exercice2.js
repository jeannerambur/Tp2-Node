//const axios = require("axios");

function exo2(val1, val2) {
    return new Promise((resolve, reject) => {
        if (val1 < val2) {
            reject('val1 plus petit que val2');
        } else {
            resolve(val1 - val2);
        }
    });
}

exo2(2, 1)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });


async function execute() {
    try {
        console.log("Executing");
        const firstPromise = exo2(2, 1);
        console.log(firstPromise);
    } catch (err) {
        console.log(err);
    }
}

execute();