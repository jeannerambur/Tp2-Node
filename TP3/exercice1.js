//const axios = require("axios");

function mot(mot) {
    return new Promise((resolve, reject) => {
        if (mot.length > 20) {
            reject("le mot a plus de 20 caractères");
        } else {
            resolve("le mot a moins de 20 caracteres");
        }
    });
}

function resolve() {
    return true;
}


mot("toto")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });


async function execute() {
    try {
        console.log("Executing");
        const firstPromise = mot("totototototo");
        console.log(firstPromise);
    } catch (err) {
        console.log(err);
    }
}

execute();