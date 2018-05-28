function addToArray1(data, array, callback) {
    if (!array) {
        return callback(new Error('No existe el array', null));
    }
    setTimeout(function () {
        array.push(data)
        callback(null, array)
    })
}

function addToArray2(data, array, callback) {
    if (!array) {
        return callback(new Error('No existe el array', null));
    }
    process.nextTick(function () {
        array.push(data)
        callback(null, array)
    })
}

var array = [1, 2, 3];

addToArray1(4, array, function (err) {
    if (err) return console.log(err.message)
    console.log("1: " + array)
});

addToArray2(4, array, function (err) {
    if (err) return console.log(err.message);
    console.log("2: " + array);
});
console.log('terminado');
// (1 seg de delay)-> [1, 2, 3, 4]