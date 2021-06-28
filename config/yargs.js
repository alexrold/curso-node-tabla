const { number } = require('yargs');

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Corresponde a la base del la tabla de multiplicar.',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Imprime  el resultado en la consola.',
  })
  .option('h', {
    alias: 'hasta',
    type: number,
    default: 10,
    describe: 'Determina el valos hasta donde quieres la tabla',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "El argumento 'b', debe ser un numero de tipo entero.";
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
