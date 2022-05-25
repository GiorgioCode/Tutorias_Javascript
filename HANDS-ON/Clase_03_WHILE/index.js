let numeroIngresado = prompt("Ingrese un numero");
parseInt(numeroIngresado)

while (numeroIngresado != 55) { //se establece que el ciclo WHILE seguirá ejecutandose mientras la variable numeroIngresado sea distinta de 55
  alert("no has acertado el numero escondido")
  numeroIngresado=+prompt("Ingrese un numero"); //si la condicion se ha cumplido, se vuelve a solicitar un numero al usuario y se guarda parseada en la variable numeroIngresado
}

alert("FELICITACIONES! has acertado el numero escondido!")
