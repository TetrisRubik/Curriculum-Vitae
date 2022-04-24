//* Función que agrega las condiciones y menciones.
export default function añadir_pie(nodo, datos) {
	const fragmento = document.createDocumentFragment();

	const div = document.createElement("DIV")

	// Añadir el texto.
	for (const elemento of datos.legal) {
		const nodoA = document.createElement("A");
		const nodoS = document.createElement("SPAN");

		// Mirar si es un enlace o texto plano.
		if (elemento.enlace) {
			nodoA.setAttribute("href", elemento.enlace);
			nodoA.setAttribute("target", "_blank");
			nodoA.textContent = elemento.texto;
			div.appendChild(nodoA);
		} else {
			nodoS.textContent = elemento.texto;
			div.appendChild(nodoS);
		}
	}
	fragmento.appendChild(div);

	nodo.appendChild(fragmento);
}