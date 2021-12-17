function sort_array(array) {
    array.sort();

    return array;
}

function randomItems(tab) {

    var item = tab[Math.floor(Math.random() * tab.length)];
    return item;
}

module.exports = {
    sort_array,
    randomItems
};