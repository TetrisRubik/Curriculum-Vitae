//* Añade todos los detectores de evento.
import cambiar_idioma from "./idioma";
import cambiar_tema from "./tema";

const botón_idioma = document.getElementById("botón_idioma");
const botón_tema = document.getElementById("botón_tema");
const nodo_estilo = document.getElementById("tema");

// Botón para cambiar el idioma.
botón_idioma.addEventListener("change", () => {
	cambiar_idioma(botón_idioma.value);
});

// Botón para cambiar el tema.
botón_tema.addEventListener("click", () => {
	cambiar_tema(nodo_estilo, botón_tema);
});