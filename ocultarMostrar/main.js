"use strict"
let boton = document.querySelectorAll(".boton-caja")

for (let i = 0; i < boton.length; i++) {
    let btn = boton[i]
    btn.addEventListener("click", esconder);
    
}

function esconder(){
    let botonDer = document.querySelector(".caja-derecha")
    let botonIzq = document.querySelector(".caja-izquierda")

    botonDer.classList.toggle("ocultar")
    botonIzq.classList.toggle("ocultar")
}   