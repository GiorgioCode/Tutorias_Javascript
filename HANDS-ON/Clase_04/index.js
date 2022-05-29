const PI = 3.1416;
let radioEsfera = 0;
let volumen = 0;
let volumenLitros = 0;

function VolumenEsfera () {
  let radioEsfera = +prompt("Ingrese el radio de la esfera (en cm):"); //se solicita radio de esfera y se guarda parseado en radioEsfera
  volumen = ((4/3) * PI * (radioEsfera*radioEsfera*radioEsfera)) //se implementa formula segun datos. REFERENCIA: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  volumen = volumen.toFixed(2); //toFixed(2) es un metodo que recorta el valor de los decimales de la variable en 2 digitos y los vuelve a guardar en la variable.
  volumenLitros = volumen / 1000; //convierto cm3 a litros
  volumenLitros = volumenLitros.toFixed(2);
  alert(`El volumen de una esfera de radio de ${radioEsfera} cm,  es de ${volumen} cm3 o ${volumenLitros} litros`) //se muestra resultado con un ALERT utilizando un TEMPLATE LITERAL - REFERENCIA:https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
  return volumen
}

VolumenEsfera()
