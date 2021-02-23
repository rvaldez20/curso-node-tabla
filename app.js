// requerimos un paquete o libreria
// const fs = require('fs');

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();


// console.log(process.argv);
//  console.log(argv);
// console.log('base: yargs: ', argv.b);

crearArchivo(argv.b, argv.l, argv.h)
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
   .catch( err => console.log(err))








// console.log('========================')
// console.log('     Tabla del 5')
// console.log('========================')


// let base = 3;




// vamnos a desestructurar el array
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ pre , base = 5 ] = arg3.split('=');


// console.log(arg3);
// console.log(pre);
// console.log(base);

// crearArchivo(base)
//    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
//    .catch( err => console.log(err))
   




/* 
   SE movio toda la logia a otro archivo
*/


// let salida = '';

// for (let i=1; i<=10; i++) {
//    salida += `${base} x ${i} = ${base * i}\n`;
// }

// console.log(salida);

// con writeFile
// fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
//    // si sucede un error
//    if (err) throw err;

//    // si todo bien
//    console.log(`Archivo tabla-${base} creado satisfactoriamente`);
// });

// con writeFileSync (para atrapar un errror se tiene que hacer mediante un try-catch)
// fs.writeFileSync( `tabla-${base}.txt`, salida);
// console.log(`Archivo tabla-${base} creado`);
