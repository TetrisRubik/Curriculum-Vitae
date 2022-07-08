export default function añadir_lenguajes(nodo, lenguajes) {
	const fragmento = document.createDocumentFragment();

	// Encabezado de la lista.
	const nodo_encabezado = document.createElement("H2");
	nodo_encabezado.textContent = lenguajes.encabezado;
	fragmento.appendChild(nodo_encabezado);

	// Variables de la lista.
	const nodo_lista = document.createElement("UL");
	const atributo_color = "class";
	const atributo_descripción = "title";
	const marcador = "▣"; // Posibles marcadores para cada color: ▩▨▧▦▥▤▣▢.
	const color = { 5: "azul", 4: "verde", 3: "amarillo", 2: "naranja", 1: "rojo" };
	const defecto = "negro";

	// Transforma cada dato a elemento de lista.
	for (const lenguaje of lenguajes.elementos) {
		const elemento = document.createElement("LI");

		// Nivel de experiencia en el lenguaje.
		const nivel = document.createElement("SPAN");
		nivel.textContent = marcador;
		nivel.setAttribute(atributo_color, color[lenguaje.nivel] ? color[lenguaje.nivel] : defecto);
		elemento.appendChild(nivel);
		elemento.setAttribute(atributo_descripción, lenguajes.descripción[lenguaje.nivel] ? lenguajes.descripción[lenguaje.nivel] : lenguajes.descripción[0]);

		// Nombre del lenguaje.
		const nombre = document.createElement("SPAN");
		nombre.textContent = " - " + lenguaje.nombre;
		elemento.appendChild(nombre);

		nodo_lista.appendChild(elemento);
	}

	fragmento.appendChild(nodo_lista);

	nodo.appendChild(fragmento);
}