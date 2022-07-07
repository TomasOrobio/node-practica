const fs = require('fs')

const crearArchivo = async(base = 3) => {   
    try {
        console.log(`TABLA DEL ${base}`);
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida = salida + `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return(`tabla-${ base }.txt`);
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}