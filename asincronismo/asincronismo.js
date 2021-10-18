// las funciones son ciudadanos de primer nivel
function sayHello(name, callback) {
    setTimeout(() => {
        console.log(`Hola ${name}`);
        callback(name);
    }, 1000)
}

function sayBye(name, callback) {
    setTimeout(() => {
        console.log(`Adios ${name}`);
        callback();
    }, 1000)
}

console.log('iniciando');
sayHello('Mon', function(name) {
    sayBye(name, function() {
        console.log('terminando');
    });
});