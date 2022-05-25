alert("hola! bienvenido al generador de tablas de multiplicar!")
let numeroIngresado = prompt("Ingrese un numero")
let multiplicacion = 0; //declaramos variable para almacenar resultados

for (let index = 1; index <= 10; index++) { //se establece valor de inicio del indice(index = 1), condicion final de cierre (index <= 10) en donde el ciclo seguirá iterando hasta que la variable index sea igual o menor que 10. Por ultimo condicion de salto (index++) en donde se sumará 1 en cada paso.
  multiplicacion = 0; //limpiamos la variable en caso de contener valor guardado previamente
  multiplicacion = numeroIngresado * index; //se guarda en la variable el resultado entre el numero ingresado por el usuario y el valor actual del indice del ciclo
  console.log(`${numeroIngresado} * ${index} = ${multiplicacion}`); //se muestra en un consola un template literal REFERENCIA:https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
}


alert("Gracias por usar el generador de tablas de multiplicar! puedes ver la tabla en la consola del navegador");