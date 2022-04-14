//* Función que añade el listado de lenguajes.
export default function añadir_lenguajes(nodo, lenguajes) {
	const fragmento = document.createDocumentFragment();

	// Encabezado de la lista.
	const nodo_encabezado = document.createElement("H2");
	nodo_encabezado.textContent = lenguajes.encabezado;
	fragmento.appendChild(nodo_encabezado);

	// Variables de la lista.
	const nodo_lista = document.createElement("UL");
	const atributo = "class";
	const marcador = "▣" // Posibles marcadores para cada color: ▩▨▧▦▥▤▣▢.
	const color = {
		5: "azul",
		4: "verde",
		3: "amarillo",
		2: "naranja",
		1: "rojo",
		0: "negro"
	}

	// Transforma cada dato a elemento de lista.
	for (const lenguaje of lenguajes.elementos) {
		const elemento = document.createElement("LI");

		// Nivel de experiencia en el lenguaje.
		const nivel = document.createElement("SPAN");
		nivel.textContent = marcador;
		nivel.setAttribute(atributo, color[lenguaje.nivel])
		elemento.appendChild(nivel);

		// Nombre del lenguaje.
		const nombre = document.createElement("SPAN");
		nombre.textContent = " - " + lenguaje.nombre;
		elemento.appendChild(nombre);

		nodo_lista.appendChild(elemento);
	}

	fragmento.appendChild(nodo_lista);

	nodo.appendChild(fragmento);
}