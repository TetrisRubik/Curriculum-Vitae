//* Función que añade idiomas a las opciones.
export default function configurar_idioma(nodo, idiomas) {
	const banderas = {
		"español": "es", "english": "uk", "français": "fr", "deutsch": "de", "italiano": "it", "português": "pt", "中文": "cn", "日本語": "jp", "한국어": "kr"
	}
	const lista = document.createElement("UL");

	// Se enlistan los idiomas seleccionados.
	for (const idioma of idiomas) {
		const elemento = document.createElement("LI");
		elemento.setAttribute("value", idioma);
		const imagen = document.createElement("IMG");
		imagen.setAttribute("src", "archivos/imágenes/banderas/" + banderas[idioma] + ".png");
		elemento.appendChild(imagen);
		const texto = document.createElement("SPAN");
		texto.textContent = " " + idioma.charAt(0).toUpperCase() + idioma.substring(1)
		elemento.appendChild(texto);
		lista.appendChild(elemento);
	}

	nodo.appendChild(lista);
}