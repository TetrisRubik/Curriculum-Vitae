//* Función que cambia el tema de oscuro a claro y viceversa.
export default function cambiar_tema(nodo, accionador) {
	const oscuro = "estilos/oscuro.css";
	const claro = "estilos/claro.css";

	accionador.addEventListener("click", () => {
		if (nodo.getAttribute("href") === oscuro) {
			nodo.setAttribute("href", claro);
		} else {
			nodo.setAttribute("href", oscuro);
		}
	});
}