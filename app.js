require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

process.stdout.write('\u001b[0J\u001b[1J\u001b[2J\u001b[0;0H\u001b[0;0W');

//console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.bgYellow.grey, 'Creado Exitosamente.'.green)
  )
  .catch((err) => console.log(err));
