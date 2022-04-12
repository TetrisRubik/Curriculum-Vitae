//* Función que añade el listado de proyectos.
export default function añadir_proyectos(nodo, proyectos) {
	const fragmento = document.createDocumentFragment();

	// Enlistar todos los proyectos como divisiones.
	for (const proyecto of proyectos) {
		const elemento = document.createElement("DIV");

		// Cabecera del proyecto.
		const nodo_encabezado = document.createElement("H2");
		nodo_encabezado.textContent = proyecto.encabezado;
		elemento.appendChild(nodo_encabezado);

		// Listado de párrafos del proyecto.
		for (const párrafo of proyecto.párrafos) {
			const nodo_párrafo = document.createElement("P");
			nodo_párrafo.textContent = párrafo;
			elemento.appendChild(nodo_párrafo);
		}

		// Imagen del proyecto.
		const nodo_imagen = document.createElement("IMG");
		nodo_imagen.setAttribute("src", proyecto.imagen);
		elemento.appendChild(nodo_imagen);

		fragmento.appendChild(elemento);
	}

	nodo.appendChild(fragmento);
}