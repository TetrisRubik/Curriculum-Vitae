//* Función que añade el listado de idiomas.
export default function añadir_idiomas(nodo, idiomas) {
	const fragmento = document.createDocumentFragment();

	// Encabezado de la lista.
	const encabezado = document.createElement("H2");
	encabezado.textContent = idiomas.encabezado;
	fragmento.appendChild(encabezado);

	// Variables de la lista.
	const nodo_lista = document.createElement("UL");

	for (const idioma of idiomas.elementos) {
		const elemento = document.createElement("LI");
		elemento.textContent = idioma.nivel + " - " + idioma.idioma + " (" + idioma.región + ")";
		nodo_lista.appendChild(elemento);
	}

	fragmento.appendChild(nodo_lista);

	nodo.appendChild(fragmento);
}