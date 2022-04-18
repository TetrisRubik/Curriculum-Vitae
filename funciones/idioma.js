//* Función que cambia el idioma de la página.
import carga_json from "./json.js";
import añadir_información from "./información.js";
import añadir_proyectos from "./proyectos.js";
import añadir_lenguajes from "./lenguajes.js";
import añadir_idiomas from "./idiomas.js";
import añadir_pie from "./legalidad.js";

export default function cambiar_idioma(idioma) {
	const nodo_información = document.getElementById("información");
	const nodo_proyectos = document.getElementById("proyectos");
	const nodo_lenguajes = document.getElementById("lenguajes");
	const nodo_idiomas = document.getElementById("idiomas");
	const nodo_pie = document.getElementById("pie");
	const datos = carga_json("archivos/objetos/idiomas/" + idioma + ".json");
	const lang = {
		"deutsch": "de",
		"english": "en",
		"español": "es",
		"français": "fr",
		"italiano": "it",
		"português": "pt",
		"中文": "zh",
		"日本語": "ja",
		"한국어": "ko"
	};

	//! Lang no funciona con todas las banderas (esto es solo provisional).
	const nodo_bandera = document.getElementById("img_bandera");
	nodo_bandera.setAttribute("src", "archivos/imágenes/banderas/" + lang[idioma] + ".png");

	// Ponemos la página web en el idioma correspondiente.
	document.querySelector("html").setAttribute("lang", lang[idioma]);

	datos.then(datos => {
		// Tratar información del usuario.
		borrar_hijos(nodo_información);
		añadir_información(nodo_información, datos.información);
		// Tratar proyectos realizados.
		borrar_hijos(nodo_proyectos);
		añadir_proyectos(nodo_proyectos, datos.proyectos);
		// Tratar listado de lenguajes de programación.
		borrar_hijos(nodo_lenguajes);
		añadir_lenguajes(nodo_lenguajes, datos.lenguajes);
		// Tratar listado de idiomas.
		borrar_hijos(nodo_idiomas);
		añadir_idiomas(nodo_idiomas, datos.idiomas);
		// Tratar condiciones de uso.
		borrar_hijos(nodo_pie);
		añadir_pie(nodo_pie, datos.pie);
	});
}

function borrar_hijos(nodo) {
	// Borramos los nodos hijos si hay.
	while (nodo.firstChild) {
		nodo.removeChild(nodo.firstChild);
	}
}