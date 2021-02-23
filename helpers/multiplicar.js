const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {
   

   let salida='';
   let consola='';

   for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
   }
   
   if (listar) {
      console.log('========================'.brightGreen);
      console.log('   Tabla del '.brightGreen, colors.brightBlue(base));
      console.log('========================'.brightGreen);

      console.log(consola);
   }
    
   try {
      await fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
      // console.log(`Archivo tabla-${base} creado`);
      
      return `Archivo tabla-${base}.txt`;
   } catch (error) {
      throw error;
   } 
}



module.exports = {
   crearArchivo
}