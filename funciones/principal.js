//* Guión principal.
import carga_json from "./json.js";
import configurar_idioma from "./configuración/opciones.js";
import cambiar_idioma from "./configuración/idioma.js";
import cambiar_tema from "./configuración/tema.js";

const botón_idioma = document.getElementById("botón_idioma");
const botón_tema = document.getElementById("botón_tema");
const nodo_idioma = document.getElementById("lista_idioma");
const nodo_estilo = document.getElementById("tema");

// Cargamos los valores por defecto desde el archivo variables.
const jsonURL = "archivos/objetos/variables.json";
const predeterminado = carga_json(jsonURL);

predeterminado.then(datos => {
	// Cambiamos al tema por defecto.
	if (!datos.modo_oscuro) cambiar_tema(nodo_estilo, botón_tema);
	// Ponemos la web a el idioma por defecto.
	cambiar_idioma(datos.idioma);
	// Listado de idiomas de la página.
	configurar_idioma(nodo_idioma, datos.idiomas);
});

// Botón para cambiar el idioma.
botón_idioma.addEventListener("click", () => {
	if (nodo_idioma.getAttribute("class") == "oculto") {
		nodo_idioma.setAttribute("class", "visible");
	} else {
		nodo_idioma.setAttribute("class", "oculto");
	}
});

// Botón para cambiar el tema.
botón_tema.addEventListener("click", () => {
	cambiar_tema(nodo_estilo, botón_tema);
});