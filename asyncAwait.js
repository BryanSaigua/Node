async function hola(nombre) {
  return  new Promise((resolve, reject) => {
      setTimeout(function () { //funcion de tiempo
        console.log('Hola, '+ nombre);
          resolve(nombre);
        }, 1000);
  });
}

async function hablar(nombre){
  return new Promise( (resolve,reject) => {
    setTimeout(function(){
      console.log('Bla bla bla bla ....');
      resolve(nombre);
      //reject('Hay un error');
    },1000);
    });
}

async function adios(nombre){
  return new Promise((resolve, reject) =>{
    setTimeout(function () { //funcion de tiempo
      console.log('Adios, '+ nombre);
      resolve(nombre);
    }, 1000);
  });
}

// ---
async function main() {
  let nombre = await hola('Bryan');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Finalizamos el proceso...');
}

console.log('Empezamos el procesos...');
    main();
