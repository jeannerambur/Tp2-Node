function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return new Promise((resolve, reject) => {

        if (Math.abs(age.getUTCFullYear() - 1970) >= 18) {

            resolve("Is Major.");
        } else {
            reject("Is Minor.");
        }
    });
}

getAge(new Date(1995, 12, 6))
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });

async function execute() {
    try {
        console.log("Executing");
        const firstPromise = getAge(new Date(1995, 12, 6));
        console.log(firstPromise);
    } catch (err) {
        console.log(err);
    }
}

execute();