//* Función que añade la información personal.
export default function añadir_información(nodo, datos) {
	const fragmento = document.createDocumentFragment();

	// Foto de perfil.
	const imagen = document.createElement("IMG");
	imagen.setAttribute("src", "archivos/vectores/logo.svg");
	imagen.setAttribute("width", "200px");
	fragmento.appendChild(imagen);

	const texto = document.createElement("DIV");

	// Nombre del usuario.
	const nombre = document.createElement("SPAN");
	nombre.textContent = datos.nombre;
	texto.appendChild(nombre);

	// Fecha de nacimiento.
	const nacimiento = document.createElement("SPAN");
	nacimiento.textContent = datos.nacimiento;
	texto.appendChild(nacimiento);

	// Título de estudiante.
	const título = document.createElement("SPAN");
	título.textContent = datos.título;
	texto.appendChild(título);

	// Lugar de cátedra.
	const facultad = document.createElement("SPAN");
	facultad.textContent = datos.facultad;
	texto.appendChild(facultad);

	fragmento.appendChild(texto);

	nodo.appendChild(fragmento);
}