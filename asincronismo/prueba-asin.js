// NORMAL
/*
console.log('INICIO');
setTimeout(() => {
    console.log('===================')
} , 1000)
console.log('FIN');
*/

// CALLBACK
/*
function fn3() {
    console.log('FN 3');
}

function run() {
    console.log('INICIO');
    asincrona(() => asincrona2(() 
        => { console.log('FIN') }
    ));
}
run();
*/

// PROMESA
/*
function asincrona() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('==================='));
        } , 1000)
    })
}

function run() {
    console.log('INICIO');
    asincrona().then(() => console.log('FIN'))
}

run();
*/

// ASYNC - AWAIT
/*
function asincrona() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('==================='));
        } , 1000)
    })
}

async function run() {
    console.log('INICIO');
    await asincrona();
    console.log('FIN');
}

run();
*/