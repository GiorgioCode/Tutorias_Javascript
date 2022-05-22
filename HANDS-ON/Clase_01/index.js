//EXPLICACIÓN SIMPLIFICADA DE AMBITO DE VARIABLE PARA LET y VAR: https://doomvault.nyc3.digitaloceanspaces.com/tlecg/big/prog09.jpg
//usamos LET para que la variable tenga un ambito de bloque (existirá y su valor estará disponible para la porcion donde fé la variable declarada, por ejemplo dentro de una funcion. En este caso, si llamamos a la variable desde afuera de la función, la misma no existirá y no podremos acceder a sus datos.) y VAR para que la misma tenga un ambito global (existirá y su valor estará dispobible para todo el codigo).
//a pesar de que inicialmente nos puede parecer una buena idea simplificar las cosas y declarar las variables como globales, esta practica no se recomienda ya que puede generar diversos problemas cuando el codigo se hace mas complejo. mas adelante veremos maneras para hacer que las variables puedan ser usadas en diferentes partes del codigo sin necesidad de tener que declararlas como globales.
let nombreUsuario = prompt('Ingrese su nombre de usuario', 'Nombre'); //con el prompt solicitamos al usuario que ingrese un valor y el mismo va a ser asignado a la variable nombreUsuario
//podemos observar que despues del texto solicitando el nombre, hemos escrito 'Nombre'. este valor, aparecerá autocompletado en el input donde el usuario debe ingresar el texto (placeholder). Se puede usar para darle una referencia al usuario, pero éste texto puede ser modificado por el mismo e introducir cualquier otro dato.
let apellidoUsuario = 'X'; //declaramos que la variable apellidoUsuario contiene un string o cadena de texto (uso de comillas) y que la misma vale X
console.log('ESTE ES UN MENSAJE DE PRUEBA'); //console.log muestra valores en la consola del navegador. Usamos comillas simples o dobles para indicar que lo que mostraremos es una cadena de texto.
console.log(nombreUsuario); //muestra en consola el contenido de la variable nombreUsuario
console.log(apellidoUsuario); //muestra en consola el contenido de la variable apellidoUsuario

alert(`Su nombre es ${nombreUsuario} y su apellido es ${apellidoUsuario}`);
alert(`Gracias por usar nuestro servicio de repeticion de nombres =)`);
