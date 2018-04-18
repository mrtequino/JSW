function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | 1000 * 1);
}
 
function* gen(callback) {
    for (var i = 0; i < 100; i++) {
        yield asyncSqrt(i, callback);
    }
}
var iterator = gen(function (value, result) {
    console.log('END execution with value =', value, 'and result =', result);
    iterator.next();
});
iterator.next();