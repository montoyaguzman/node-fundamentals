function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

exports.suma = suma;
module.exports.resta = resta;
module.exports = { ...module.exports, multiplicacion }