//* Guión principal.
import añadir_lenguajes from "./lenguajes.js";
import cambiar_tema from "./tema.js";

//
const lista_leng = document.getElementById("leng");
const leng = ["JavaScript", "Python", "C", "C++", "Java", "Go"];
añadir_lenguajes(lista_leng, leng);

//
const nodo_botón_tema = document.getElementById("tema_botón");
const nodo_estilo = document.getElementById("tema_css");
cambiar_tema(nodo_estilo, nodo_botón_tema);