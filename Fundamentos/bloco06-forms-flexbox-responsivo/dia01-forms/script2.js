// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', clique) 

function clique (event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', chek) 

function chek (event) {
    event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', texto) 

function texto (event) {
   const caracter = event.key;
    if (caracter !== a) {
        event.preventDefault();
    }

}