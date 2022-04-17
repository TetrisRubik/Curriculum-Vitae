//* Guión principal.
import carga_json from "./json.js";
import configurar_idioma from "./opciones.js";
import cambiar_idioma from "./idioma.js";
import cambiar_tema from "./tema.js";

const botón_idioma = document.getElementById("botón_idioma");
const botón_tema = document.getElementById("botón_tema");
const nodo_idioma = document.getElementById("lista_idioma");
const nodo_estilo = document.getElementById("tema");

// Cargamos los valores por defecto desde el archivo variables.
const jsonURL = "archivos/objetos/variables.json";
const predeterminado = carga_json(jsonURL);

predeterminado.then(datos => {
	// Listado de idiomas de la página.
	configurar_idioma(nodo_idioma, datos.idiomas);
	// Ponemos la web a el idioma por defecto.
	cambiar_idioma(datos.idioma);
	// Cambiamos al tema por defecto.
	if (datos.modo_oscuro) cambiar_tema(nodo_estilo, botón_tema);
});

// Botón para cambiar el idioma.
botón_idioma.addEventListener("change", () => {
	cambiar_idioma(botón_idioma.value);
});

// Botón para cambiar el tema.
botón_tema.addEventListener("click", () => {
	cambiar_tema(nodo_estilo, botón_tema);
});