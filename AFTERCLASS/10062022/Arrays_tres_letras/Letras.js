//REFERENCIA METODOS DE ARRAYS:
//https://github.com/gdcodev/25-metodos-array-javascript

//  Crear una función que reciba un arreglo de strings y retorne:
//  Un nuevo arreglo que contenga aquellos strings que tengan solamente 3 letras.
//
//  Pasos:
//      1 - Definir una funcion.
//      2 - Crear un ciclo que permita recorrer el arreglo.
//      3 - Agregar un condicional que permita verificar si el valor del elemento en la posicion cumple con la condición.
//      4 - Agregar resultado a nuevo arreglo.
//      5 - Ejecutar la función.

let nuevoArray = []; // inicializa un arreglo vacio - variable de alcance global

function tresLetras(arrayOrigen) {
  for (let i = 0; i < arrayOrigen.length; i++) {
    // uso de ciclo for - uso de propiedad length
    if (arrayOrigen[i].length === 3) {
      // verifica si cumple la condicion
      nuevoArray.push(arrayOrigen[i]); // agregar elementos al arreglo global
    }
  }
}
arrayPrueba = ["auto", "moto", "aro", "ojo", "camion"];
tresLetras(arrayPrueba); // llama a la funcion introduciendo array de prueba
console.log(arrayPrueba); //muestra array de prueba en consola
console.log(nuevoArray); // muestra el resultado del nuevo array generado
