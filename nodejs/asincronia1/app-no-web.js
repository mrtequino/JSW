process.env.UV_THREADPOOL_SIZE = 100;

function cb() {
    process.nextTick(() => {
        for (i = 0; i < 5000000000; i++) {
            //console.log(i);
        }
        console.log('cb: ' + new Date());
    }, 0);
    console.log('Processed in next iteration: ' + new Date());
}

function cb1() {
    setTimeout(() => {
        for (i = 0; i < 2000000000; i++) {
            //console.log(i);
        }
        console.log('cb1: ' + new Date());
    }, 5);
    console.log('otra función: ' + new Date());
}

console.log('primero: ');
process.nextTick(cb);
console.log('segundo: ');
process.nextTick(cb);
console.log('tercero: ');
process.nextTick(cb);
console.log('Processed in the first iteration');
process.nextTick(cb1);
console.log('Processed in the first iteration');
