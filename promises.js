function hola(nombre) {
  return  new Promise((resolve, reject) => {
      setTimeout(function () { //funcion de tiempo
        console.log('Hola, '+ nombre);
          resolve(nombre);
        }, 1000);
  });
}

function hablar(nombre){
  return new Promise( (resolve,reject) => {
    setTimeout(function(){
      console.log('Bla bla bla bla ....');
      //resolve(nombre);
      reject('Hay un error');
    },1000);
    });
}

function adios(nombre){
  return new Promise((resolve, reject) =>{
    setTimeout(function () { //funcion de tiempo
      console.log('Adios, '+ nombre);
      resolve(nombre);
    }, 1000);
  });
}

// ---
console.log('Iniciando el proceso...');
hola('Bryan')
    .then(hablar)
    .then(adios)
    .then(( nombre ) => {
        console.log('Terminado el proceso...');
    })

    .catch(error =>{
      console.error('Ha habido un error:');
      console.error(error);
    })
