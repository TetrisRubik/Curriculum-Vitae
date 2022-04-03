//* Función que añade el listado de lenguajes.
export default function añadir_lenguajes(nodo, lenguajes) {
	const fragmento = document.createDocumentFragment();

	for (const lenguaje of lenguajes) {
		const lista = document.createElement("LI");
		lista.textContent = lenguaje;
		fragmento.appendChild(lista);
	}

	nodo.appendChild(fragmento);
}