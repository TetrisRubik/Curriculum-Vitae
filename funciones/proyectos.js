//* Función que añade el listado de proyectos.
export default function añadir_proyectos(nodo, proyectos) {
	const fragmento = document.createDocumentFragment();

	// Enlistar todos los proyectos como divisiones.
	for (const proyecto of proyectos) {
		const elemento = document.createElement("DIV");

		// Cabecera del proyecto.
		const nodo_encabezado = document.createElement("H2");
		nodo_encabezado.textContent = proyecto.título;
		elemento.appendChild(nodo_encabezado);

		// Diferentes párrafos del proyecto.
		const nodo_párrafo1 = document.createElement("P");
		nodo_párrafo1.textContent = proyecto.párrafo1;
		elemento.appendChild(nodo_párrafo1);
		const nodo_párrafo2 = document.createElement("P");
		nodo_párrafo2.textContent = proyecto.párrafo2;
		elemento.appendChild(nodo_párrafo2);
		const nodo_párrafo3 = document.createElement("P");
		nodo_párrafo3.textContent = proyecto.párrafo3;
		elemento.appendChild(nodo_párrafo3);

		// Imagen del proyecto.
		const nodo_imagen = document.createElement("IMG");
		nodo_imagen.setAttribute("src", proyecto.imagen);
		elemento.appendChild(nodo_imagen);

		fragmento.appendChild(elemento);
	}

	nodo.appendChild(fragmento);
}