let numero = prompt('Por favor, inserte un numero', '0');
parseInt(numero); //convertir string que recibe prompt en numero entero
console.log(numero); //muestra numero en consola

if (numero >= 10 && numero <= 50) {
  //se comprueba si el numero ingresado se encuentra comprendido entre los valores 10 (limite inferior incluido) y 50 (limite superior incluido) con un operador AND
  alert('el numero ' + numero + ' SI se encuentra comprendido entre 10 y 50');
  //se muestra con un ALERT el mensaje A
} else {
  alert('el numero ' + numero + ' NO se encuentra comprendido entre 10 y 50');
  //se muestra con un ALERT el mensaje B
}
