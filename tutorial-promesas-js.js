

const numeroElegido = 5; // del 1 al 10

function numerosAlAzar(resolve, reject) {
  setTimeout(() => {
    let valor = Math.round(Math.random()*10);
    if (valor > numeroElegido) {
      resolve(valor);
    } else {
      reject(`${valor} es menor o igual a tu número elegido: ${numeroElegido}`);
    }
  }, 500);
}
function esPar(valor) {
  const paridad = valor % 2 === 1 ? 'es impar' : 'es par'
  console.log(`El número ${valor} ${paridad}.`)
}

new Promise(numerosAlAzar)
    .then(esPar)
    .catch(causa =>{
        console.error("Ha fallado debido a: ", causa)
    })

// Respuesta esperada:
// Si resuelve: 
//  a) El número 10 es par.
//  b) El número 9 es impar.
// Si rechaza: 
//  Ha fallado debido a:  1 es menor o igual a tu número elegido: 5

