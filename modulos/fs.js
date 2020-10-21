const fs = require('fs'); // como traer un archivo de node

function leer(ruta,cb) {
  fs.readFile(ruta,(err, data) => {
    cd(data.toString());
  });
}

function escribir(ruta,contenido, cb) {
  fs.writeFile(ruta,contenido,function (err){
    if (err) {
      console.error('No he podido escribir',err);
    }else {
      console.log('Se a escrito correctamente');
    }
  });
}

function borrar(ruta,cb){
  fs.unlink(ruta, cb);
}
//escribir(__dirname + '/archivo1.txt',console.log);
//leer(__dirname + '/archivo.txt', console.log)
borrar(__dirname + '/archivo1.txt', console.log);
