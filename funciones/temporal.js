//* Función que añade idiomas a las opciones.
import carga_json from "./json.js";

export default function configurar_idioma(nodo) {
	const ruta = "/archivos/objetos/";
	const tipo = ".json";
	const idiomas = ["español", "english", "français", "deutsch", "italiano", "português", "中文", "日本語", "한국어"];
	const banderas = {
		"español": "🇪🇸", "english": "🇬🇧", "français": "🇫🇷", "deutsch": "🇩🇪", "italiano": "🇮🇹", "português": "🇵🇹", "中文": "🇨🇳", "日本語": "🇯🇵", "한국어": "🇰🇷"
	}

	for (const idioma of idiomas) {
		const promesa = carga_json(ruta + idioma + tipo);
		promesa.then(datos => {
			if (datos.información) {
				const elemento = document.createElement("OPTION");
				elemento.setAttribute("value", idioma);
				elemento.textContent = banderas[idioma] + " " + idioma.charAt(0).toUpperCase() + idioma.substring(1);

				nodo.appendChild(elemento);
			}
		});
	}
}