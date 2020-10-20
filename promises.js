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