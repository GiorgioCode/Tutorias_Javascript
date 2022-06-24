//IDENTIFICA ELEMENTO CONTENEDOR O PADRE PARA INSERTAR TARJETAS
let contenedor = document.getElementById("container");
//GENERADOR DE TARJETAS DE USUARIOS
user.forEach((user) => {
  //BUCLE QUE REPASA LOS OBJETOS DE USER EN ARCHIVO usuarios.js
  contenedor.innerHTML += `
  <div class="card text-white bg-primary m-3"> 
	<div class="card-header"><img src=${user.avatar} /> ${user.first_name} ${user.last_name}</div>
	<div class="card-body">
	  <h4 class="card-title">Company: ${user.company}</h4>
	  <p class="card-text">job: ${user.company_department}</p>
	  <p class="card-text">email: ${user.email}</p>
	  <button onClick="usuarioFavorito(${user.id})" class="btn btn-outline-success">Fav</button>
	</div>
  </div>`; //cada tarjeta se va a generar ubicando las propiedades de cada objeto segun la obicacion determinada
});

//BUSCADOR DE USUARIOS
function filtroUsuarios() {
  const entrada = document.querySelector(".buscarUsuarios");
  entrada.addEventListener("keyup", (e) => {
    console.log(e);

    let entradaMinuscula = e.target.value.toLowerCase(); //manda a minusculas las entradas del input
    console.log(entradaMinuscula);
    if (e.target.matches(".buscarUsuarios")) {
      document.querySelectorAll(".card").forEach(
        (el) =>
          el.textContent.toLowerCase().includes(entradaMinuscula) //manda a minusculas el contenido de las tarjetas y compara con el input
            ? el.classList.remove("filtrar") //visibiliza tarjetas
            : el.classList.add("filtrar") //esconde tarjetas
      );
    }
  });
}

filtroUsuarios();

let contenedor_fav = document.getElementById("container_fav");
//FUNCION SELECTORA DE USUARIOS

let favoritos = [];

function cargarFavoritos() {
  if (localStorage.getItem("StorageFavoritos") !== null) {
    favoritos = JSON.parse(localStorage.getItem("StorageFavoritos"));
    return;
  } else {
    localStorage.setItem("StorageFavoritos", JSON.stringify(favoritos));
    return;
  }
}

cargarFavoritos();

//GENERADOR DE TARJETAS DE FAVORITOS
favoritos.forEach((favoritos) => {
  contenedor_fav.innerHTML += `
	<div class="card text-white bg-primary m-3"> 
	  <div class="card-header"><img src=${favoritos.avatar} /> ${favoritos.first_name} ${favoritos.last_name}</div>
	  <div class="card-body">
		<h4 class="card-title">Company: ${favoritos.company}</h4>
		<p class="card-text">job: ${favoritos.company_department}</p>
		<p class="card-text">email: ${favoritos.email}</p>
		<button onClick="quitarFavorito(${favoritos.id})" class="btn btn-outline-danger">No Fav</button>
	  </div>
	</div>`; //cada tarjeta se va a generar ubicando las propiedades de cada objeto segun la obicacion determinada
});

function usuarioFavorito(identificador) {
  let indice = identificador - 1;
  let objeto_seleccionado = {};
  objeto_seleccionado = user[indice];
  if(!favoritos.some(e=>e.id===identificador)) {
	  favoritos.push(objeto_seleccionado);
	  localStorage.setItem("StorageFavoritos", JSON.stringify(favoritos));
    location.reload()
  } else {
	alert("el usuario ya se encuentra en favoritos =)")
  }
}

function quitarFavorito(id) {
  let favoritos_filtrado = favoritos.filter((elemento) => elemento.id != id);
  favoritos = favoritos_filtrado;
  localStorage.setItem("StorageFavoritos", JSON.stringify(favoritos));
  console.log(favoritos_filtrado);
  location.reload();
}
