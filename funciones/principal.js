//* Guión principal.
import añadir_lenguajes from "./lenguajes.js";
import cambiar_tema from "./tema.js";
import carga_json from "./json.js";
import añadir_proyectos from "./proyectos.js";
import añadir_información from "./información.js";

const botón_idioma = document.getElementById("botón_idioma");
const botón_tema = document.getElementById("botón_tema");
const nodo_estilo = document.getElementById("tema");
const nodo_lenguajes = document.getElementById("lenguajes");
const nodo_proyectos = document.getElementById("proyectos");
const nodo_información = document.getElementById("información");
const datos = carga_json("archivos/español.json");

//# Añadir proyectos (esto estará dentro de cambiar_idioma).
datos.then(datos => {
	añadir_proyectos(nodo_proyectos, datos.proyectos);
});

//# Añadir información (esto estará dentro de cambiar_idioma).
datos.then(datos => {
	añadir_información(nodo_información, datos.información)
})

// Cargamos los valores por defecto desde el json variables.
const jsonURL = "archivos/variables.json";
const predeterminado = carga_json(jsonURL);

predeterminado.then(datos => {
	// Ponemos la web a el idioma por defecto.
	//# cambiar_idioma(datos.idioma);
	// Cambiamos al tema por defecto.
	if (datos.modo_oscuro) cambiar_tema(nodo_estilo, botón_tema);
	// Coloca los lenguajes aprendidos y su nivel.
	if (datos.lenguajes[0]) añadir_lenguajes(nodo_lenguajes, datos.lenguajes);
});

// Botón para cambiar el idioma.
botón_idioma.addEventListener("change", () => {
	//# cambiar_idioma(botón_idioma.value);
});

// Botón para cambiar tema claro/oscuro.
botón_tema.addEventListener("click", () => {
	cambiar_tema(nodo_estilo, botón_tema);
});