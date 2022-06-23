//IDENTIFICA ELEMENTO CONTENEDOR O PADRE PARA INSERTAR TARJETAS
let contenedor = document.getElementById("container");
//GENERADOR DE TARJETAS DE USUARIOS
user.forEach((user) => { //BUCLE QUE REPASA LOS OBJETOS DE USER EN ARCHIVO usuarios.js
  contenedor.innerHTML += `
  <div class="card text-white bg-primary m-3"> 
	<div class="card-header"><img src=${user.avatar} /> ${user.first_name} ${user.last_name}</div>
	<div class="card-body">
	  <h4 class="card-title">Company: ${user.company}</h4>
	  <p class="card-text">job: ${user.company_department}</p>
	  <p class="card-text">email: ${user.email}</p>
	</div>
  </div>`; //cada tarjeta se va a generar ubicando las propiedades de cada objeto segun la obicacion determinada
});

//BUSCADOR DE USUARIOS
function filtroUsuarios() {
	const entrada = document.querySelector(".buscarUsuarios");
	entrada.addEventListener("keyup", (e) => {
    console.log(e)

		let entradaMinuscula = e.target.value.toLowerCase(); //manda a minusculas las entradas del input
		console.log(entradaMinuscula)
		if (e.target.matches(".buscarUsuarios")) {
			document.querySelectorAll(".card").forEach(
				(el) =>	el.textContent.toLowerCase().includes(entradaMinuscula) //manda a minusculas el contenido de las tarjetas y compara con el input
					? el.classList.remove("filtrar") //visibiliza tarjetas
					: el.classList.add("filtrar") //esconde tarjetas
					);
				}
			});
}
filtroUsuarios()
		


