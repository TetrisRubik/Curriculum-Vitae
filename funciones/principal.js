//* Guión principal.
import añadir_lenguajes from "./lenguajes.js";
import cambiar_tema from "./tema.js";
import carga_json from "./json.js";

// Carga el archivo JSON como promesa.
const jsonURL = "archivos/elementos.json";
const datos = carga_json(jsonURL);

// Coloca los lenguajes conocidos y su nivel.
const lista_leng = document.getElementById("leng");
const leng = ["JavaScript", "Python", "C", "C++", "Java", "Go"];
const nivel = [5, 4, 3, 2, 1];
añadir_lenguajes(lista_leng, leng, nivel);

// Botón para cambiar tema claro/oscuro.
const nodo_botón_tema = document.getElementById("tema_botón");
const nodo_estilo = document.getElementById("tema_css");
cambiar_tema(nodo_estilo, nodo_botón_tema);