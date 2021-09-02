const  yargsArgv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Base de la tabla de multiplicar'
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Lista o muestra la tabla en consola'
                        })
                        .option('h', {
                            alias: 'hasta',
                            type: 'number',
                            describe: 'Limite de la impresion de tabla'
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.base)){
                                throw 'La base debe ser un numero';
                            }
                            return true;

                        })
                        .argv;

module.exports = {
    yargsArgv
}