//* Guión principal.
import añadir_lenguajes from "./lenguajes.js";
import cambiar_tema from "./tema.js";
import carga_json from "./json.js";

// Carga el archivo JSON como promesa.
const jsonURL = "archivos/elementos.json";
const datos = carga_json(jsonURL);

// Coloca los lenguajes conocidos y su nivel.
const nodo_leng = document.getElementById("leng");
datos.then(datos => añadir_lenguajes(nodo_leng, datos.lenguajes));

// Botón para cambiar tema claro/oscuro.
const nodo_botón_tema = document.getElementById("tema_botón");
const nodo_estilo = document.getElementById("tema_css");
cambiar_tema(nodo_estilo, nodo_botón_tema);