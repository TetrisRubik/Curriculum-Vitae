//* Función que cambia el tema de oscuro a claro y viceversa.
export default function cambiar_tema(nodo, accionador) {
	const tema_oscuro = "estilos/oscuro.css";
	const tema_claro = "estilos/claro.css";
	const icono_oscuro = "archivos/modo_oscuro.svg";
	const icono_claro = "archivos/modo_claro.svg";
	const alternativa_oscuro = "Modo Oscuro";
	const alternativa_claro = "Modo Claro";

	accionador.addEventListener("click", () => {
		if (nodo.getAttribute("href") === tema_oscuro) {
			nodo.setAttribute("href", tema_claro);
			accionador.setAttribute("src", icono_oscuro);
			accionador.setAttribute("alt", alternativa_oscuro);
		} else {
			nodo.setAttribute("href", tema_oscuro);
			accionador.setAttribute("src", icono_claro);
			accionador.setAttribute("alt", alternativa_claro);
		}
	});
}