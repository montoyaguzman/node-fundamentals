// variables de entorno en mayusculas y SNAKE_CASE
let saludo = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('hola', saludo);
console.log('mi web es:', web);
// NOMBRE=Jose node entorno.js