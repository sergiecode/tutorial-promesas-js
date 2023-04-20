![enter image description here](https://raw.githubusercontent.com/sergiecode/tutorial-promesas-js/master/tutorial-promesas-js%20%281%29.jpg)
![enter image description here](https://raw.githubusercontent.com/sergiecode/tutorial-promesas-js/master/tutorial-promesas-js%20%282%29.jpg)
![enter image description here](https://raw.githubusercontent.com/sergiecode/tutorial-promesas-js/master/tutorial-promesas-js%20%283%29.jpg)
![enter image description here](https://raw.githubusercontent.com/sergiecode/tutorial-promesas-js/master/tutorial-promesas-js%20%284%29.jpg)






## Promesas en JavaScript

Este es un ejemplo de cómo se pueden utilizar las promesas en JavaScript para ejecutar código asíncrono y manejar posibles errores. En este caso, se utiliza la función `numerosAlAzar` para generar un número aleatorio entre 0 y 10, y luego se comprueba si es mayor que el número elegido por el usuario. Si es así, se resuelve la promesa con el número generado, y si no, se rechaza la promesa con un mensaje de error.

El siguiente código muestra cómo se puede utilizar esta promesa para ejecutar la función `esPar` si se resuelve correctamente la promesa, o mostrar un mensaje de error si se rechaza la promesa:

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

En este ejemplo, se crea una nueva promesa utilizando la función `Promise` y se le pasa la función `numerosAlAzar` como argumento. Luego, se encadena la función `then` para ejecutar la función `esPar` si la promesa se resuelve correctamente, o la función `catch` para manejar el posible error si la promesa se rechaza. En este caso, la función `esPar` simplemente comprueba si el número es par o impar y muestra un mensaje en la consola, mientras que la función `catch` muestra un mensaje de error con la causa del error.
