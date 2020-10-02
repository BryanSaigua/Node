function hola(nombre, micallback) {
  console.log('hola soy una funcion asincrona');
  setTimeout(function () { //funcion de tiempo
    console.log('Hola, '+ nombre);
    micallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallBack){
  setTimeout(function () { //funcion de tiempo
    console.log('Adios, '+ nombre);
    otroCallBack();
  }, 1000);
};
``
console.log('Iniciando proceso...');
hola('Bryan', function (nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso...');
  });
});
