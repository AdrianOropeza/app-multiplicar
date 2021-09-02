console.clear();

const { crearArchivo } = require('./helper/multiplicar');
const { yargsArgv } = require('./config/yargs');
const colors = require('colors');

console.log(yargsArgv);

crearArchivo(yargsArgv.b, yargsArgv.l, yargsArgv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'.magenta))
    .catch(err => console.log(err));

