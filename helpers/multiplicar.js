const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    const headerConsola =
      '\n=========================\n'.cyan +
      '   TABLA DEL:  '.cyan +
      `${base}` +
      '\n=========================\n'.cyan;
    const headerArchivo = `=========================\n    TABLA DEL:  ${base}\n=========================\n`;

    let salidaArchivo = headerArchivo;
    let salidaConsola = headerConsola;

    for (let i = 1; i <= hasta; i++) {
      salidaConsola += `    ${base} ${'x'.cyan} ${i} ${'='.cyan}  ${
        base * i
      }\n`;
      salidaArchivo += `${base} 'x  ${i} '='  ${base * i}\n`;
    }
    if (listar) {
      console.log(salidaConsola);
    }

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salidaArchivo);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
