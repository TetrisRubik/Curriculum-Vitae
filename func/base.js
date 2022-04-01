//* Guión principal.
//# Falta refactorizar.

const lista_leng = document.getElementById("leng");

const leng = ["JavaScript", "Python", "C", "C++", "Java", "Go"];

const frag = document.createDocumentFragment();

for (const x of leng) {
	const lista = document.createElement("LI");
	lista.textContent = x;
	frag.appendChild(lista);
}

lista_leng.appendChild(frag);