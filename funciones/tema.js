//* Función que cambia el tema de oscuro a claro y viceversa.
export default function cambiar_tema(nodo, accionador) {
	accionador.addEventListener("click", () => {
		if (nodo.getAttribute("href") === "estilos/oscuro.css") {
			nodo.setAttribute("href", "estilos/claro.css");
		} else {
			nodo.setAttribute("href", "estilos/oscuro.css");
		}
	});
}