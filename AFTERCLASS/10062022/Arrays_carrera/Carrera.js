//REFERENCIA METODOS DE ARRAYS:
//https://github.com/gdcodev/25-metodos-array-javascript

//Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
//Ana, Oswaldo, Raúl, Celia, María, Antonio
let clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio "];
//(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

//Imprimr en consola la clasificación actual
console.log("Resultado de clasificacion inicial: ");
function mostrarClasificacion() {
  for (let i = 0; i < clasificacion.length; i++) {
    console.log(`El puesto ${i + 1} es de ${clasificacion[i]}`);
  }
}
mostrarClasificacion();
//El concurso continua, y se modifica la posicion inicial. Debemos cambiar en el array para reflejar estos cambios:
//Celia adelanta a Raúl
clasificacion[2] = "Celia";
clasificacion[3] = "Raúl";
//Antonio es descalificado y se elimina del concurso
clasificacion.pop();
//Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
clasificacion.splice(1, 0, "Roberto", "Amaya");
//Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificacion.unshift("Marta");
//Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
console.log("Resultado de clasificacion actualizada: ");
mostrarClasificacion();
//para ver las tablas de clasificaciones iniciales y final, abrir la consola del navegador.