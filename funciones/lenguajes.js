//* Función que añade el listado de lenguajes.
export default function añadir_lenguajes(nodo, datos) {
	const fragmento = document.createDocumentFragment();

	//? ▩▨▧▦▥▤▣▢ Posibles cuadrados para cada color.
	for (const dato of datos) {
		const elemento = document.createElement("LI");
		const nivel = document.createElement("SPAN");
		nivel.textContent = "▣";
		switch (dato.nivel) {
			case 5:
				nivel.setAttribute("class", "azul");
				break;
			case 4:
				nivel.setAttribute("class", "verde");
				break;
			case 3:
				nivel.setAttribute("class", "amarillo");
				break;
			case 2:
				nivel.setAttribute("class", "naranja");
				break;
			case 1:
				nivel.setAttribute("class", "rojo");
				break;
			case 0:
				nivel.setAttribute("class", "negro");
				break;
		}
		elemento.appendChild(nivel);
		const lenguaje = document.createElement("SPAN");
		lenguaje.textContent = " - " + dato.nombre;
		elemento.appendChild(lenguaje);
		fragmento.appendChild(elemento);
	}

	nodo.appendChild(fragmento);
}