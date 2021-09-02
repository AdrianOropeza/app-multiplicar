//importando
 const fs = require('fs');
 const colors = require('colors');
//funcion principal
 const crearArchivo = async (base = 3, listar = false, hasta = 10) => {

    let resultado, consola = '';
    
    if ( hasta ) {
        for (let i = 1; i <= hasta; i++) {
            resultado += `${base} x ${i} = ${base* i} \n`;
            consola += `${base} ${colors.yellow('x')} ${i} = ${colors.red(base* i)} \n`;
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado += `${base} x ${i} = ${base* i} \n`;
            consola += `${base} ${colors.yellow('x')} ${i} = ${colors.red(base* i)} \n`;
        }
    }

    if( listar ){
        console.log(colors.cyan('=========='));
        console.log(`Tabla del: ${base}`)
        console.log(colors.cyan('=========='));
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, resultado);

    return (`Tabla-${base}.txt`);
    
    }
    
module.exports = {
    crearArchivo
}