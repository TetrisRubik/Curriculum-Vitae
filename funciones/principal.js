//* Guión principal.
import añadir_lenguajes from "./lenguajes.js";
import cambiar_tema from "./tema.js";
import carga_json from "./json.js";

// Carga el archivo JSON como promesa.
const jsonURL = "archivos/elementos.json";
const datos = carga_json(jsonURL);

// Coloca los lenguajes conocidos y su nivel.
const nodo_leng = document.getElementById("lenguajes");
datos.then(datos => {if (datos.lenguajes[0]) {
	añadir_lenguajes(nodo_leng, datos.lenguajes);
}});

// Botón para cambiar tema claro/oscuro.
const botón_tema = document.getElementById("botón_tema");
const nodo_estilo = document.getElementById("tema");
cambiar_tema(nodo_estilo, botón_tema);

// Botón para cambiar el idioma.
const botón_idioma = document.getElementById("botón_idioma");