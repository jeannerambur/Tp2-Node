var slug = require("slug");

function string_to_slug(str) {

    return slug(str);
}

function upper(str) {
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ");
    return str2;
}

module.exports = {
    string_to_slug,
    upper
};