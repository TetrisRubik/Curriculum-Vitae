//* Función que cambia el tema de oscuro a claro y viceversa.
export default function cambiar_tema(nodo, accionador) {
	const tema_oscuro = "/estilos/oscuro.css";
	const tema_claro = "/estilos/claro.css";
	const icono_oscuro = "/archivos/vectores/modo_oscuro.svg";
	const icono_claro = "/archivos/vectores/modo_claro.svg";
	const alternativa_oscuro = "Botón para cambiar a modo oscuro";
	const alternativa_claro = "Botón para cambiar a modo claro";

	if (nodo.getAttribute("href") === tema_oscuro) {
		nodo.setAttribute("href", tema_claro);
		accionador.setAttribute("src", icono_oscuro);
		accionador.setAttribute("alt", alternativa_oscuro);
	} else {
		nodo.setAttribute("href", tema_oscuro);
		accionador.setAttribute("src", icono_claro);
		accionador.setAttribute("alt", alternativa_claro);
	}
}