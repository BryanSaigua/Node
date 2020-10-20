function hola(nombre, micallback) {
  console.log('hola soy una funcion asincrona');
  setTimeout(function () { //funcion de tiempo
    console.log('Hola, '+ nombre);
    micallback(nombre);
  }, 1000);
}

function hablar(callbackHablar){
  setTimeout(function(){
    console.log('Bla bla bla bla ....');
    callbackHablar();
  },1000);
}

function adios(nombre, otroCallBack){
  setTimeout(function () { //funcion de tiempo
    console.log('Adios, '+ nombre);
    otroCallBack();
  }, 1000);
};

function conversacion(nombre, veces, callback) {
  //recursividad llamar a la funcion con una informacion igermante distinta
    if (veces > 0) {
      hablar(function () {
        conversacion(nombre,--veces, callback);
      })
    } else {
      adios(nombre,callback);
    }
}

console.log('Iniciando proceso...');
hola('Bryan',function (nombre) {
  conversacion(nombre, 3, function() {
    console.log('Proceso Terminado');
  });
});
/*hola('Bryan', function (nombre) {
  adios(nombre, function () {
      console.log('Terminamos');
    });
  });*/

  /*hablar(function() {
    hablar(function(){
      hablar(function(){
      adios(nombre, function() {
        console.log('Terminando proceso...');
        });
      });
    });
  });
});*/
