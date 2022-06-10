//en este ejemplo se genera una clase personaje, con diferentes propiedades y metodos simulando un juego.
class Personaje {
	constructor(nombre, vida, poder) {
		this.nombre = nombre;
		this.vida = vida;
		this.poder = poder;
	}
	
	resumen(){
		alert(this.nombre+" tiene: "+this.vida+" de vida y "+this.poder+" de poder.")
	}
	
	Ataca(valor){ //metodo para que un personaje ataque a otro. si intenta atacar por encima de sus fuerzas, muere
		this.poder = this.poder - valor;
		if (this.poder <=0) {
			this.vida = 0;
			alert(this.nombre+" ya no tiene poder para atacar... y muere")
		} else {
			alert(this.nombre+" ha realizado un ataque")
			this.resumen();
		}
	}
	esAtacado(valor2){ //metodo para que un personaje reciba daño
		this.vida = this.vida - valor2;
		if (this.vida <=0) {
			alert(this.nombre+" ha muerto")
		} else {
			alert(this.nombre+" ha sido atacado")
			this.resumen();
		}
	}

	revive(){ //metodo para que un personaje vuelva a tener vida
		this.vida = 10;
		this.poder = 20;
		alert(this.nombre+" ha revivido")
		this.resumen();
	}
}

//creamos personajes con sus propiedades (nombre, vida, poder)
const Frodo = new Personaje('Frodo', 10, 5);
const Legolas = new Personaje('Legolas', 8, 60);
const Dobbie = new Personaje('Dobbie', 9, 70);

//hacemos jugar a los personajes llamando a sus nombres y metodos
Dobbie.esAtacado(5);
Legolas.Ataca(5);
Frodo.esAtacado(20);
Frodo.revive();

//si abres la consola de tu navegador, puedes seguir introduciendo nombres y metodos de personajes o incluso creando nuevos personajes!!!!

