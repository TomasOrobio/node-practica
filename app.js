const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('yargs').argv
                .option('b', {
                    alias: 'base',
                    type: 'number'
                })
                .argv;



console.clear();

console.log(argv);
















// EJEMPLO.
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5  ] = arg3.split('=');


// const base = 3;


// crearArchivo( base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err));
