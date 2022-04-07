//* Función que añade el listado de lenguajes.
export default function añadir_lenguajes(nodo, datos) {
	const fragmento = document.createDocumentFragment();

	// Posibles marcadores para cada color: ▩▨▧▦▥▤▣▢.
	const marcador = "▣"
	const atributo = "class";
	const color = {
		5: "azul",
		4: "verde",
		3: "amarillo",
		2: "naranja",
		1: "rojo",
		0: "negro"
	}

	for (const dato of datos) {
		const elemento = document.createElement("LI");

		// Nivel de experiencia en el lenguaje.
		const nivel = document.createElement("SPAN");
		nivel.textContent = marcador;
		nivel.setAttribute(atributo, color[dato.nivel])
		elemento.appendChild(nivel);

		// Nombre del lenguaje.
		const lenguaje = document.createElement("SPAN");
		lenguaje.textContent = " - " + dato.nombre;
		elemento.appendChild(lenguaje);

		fragmento.appendChild(elemento);
	}

	nodo.appendChild(fragmento);
}