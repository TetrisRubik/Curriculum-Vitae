//* Función que añade idiomas a las opciones.
export default function configurar_idioma(nodo, idiomas) {
	const fragmento = document.createDocumentFragment();
	const banderas = {
		"español": "🇪🇸", "english": "🇬🇧", "français": "🇫🇷", "deutsch": "🇩🇪", "italiano": "🇮🇹", "português": "🇵🇹", "中文": "🇨🇳", "日本語": "🇯🇵", "한국어": "🇰🇷"
	}

	// Se enlistan los idiomas seleccionados.
	for (const idioma of idiomas) {
		const elemento = document.createElement("OPTION");
		elemento.setAttribute("value", idioma);
		elemento.textContent = banderas[idioma] + " " + idioma.charAt(0).toUpperCase() + idioma.substring(1);
		fragmento.appendChild(elemento);
	}

	nodo.appendChild(fragmento);
}