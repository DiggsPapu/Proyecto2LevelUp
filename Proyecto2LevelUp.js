// Funciones
function sumar_contador(){
    counter++;
    displayAct();
}
function restar_contador(){
    counter--;
    displayAct();
}
function reset_contador(){
    counter = 0;
    displayAct();
}
function displayAct(){
    txt_contador.innerHTML = counter ;
    if (counter>0){
        txt_contador.style.color = "green";
    }else if (counter<0){
        txt_contador.style.color = "red";
    }else{
        txt_contador.style.color = "black";
    }
}
// Asignacion de los botones por id
var boton_sumar = document.getElementById("suma");
var boton_restar = document.getElementById("restar")
var boton_reset = document.getElementById("reset");
var txt_contador = document.getElementById("counter");
// Asignacion de variables locales
var counter = 0 ;
// Listado de eventos
boton_sumar.addEventListener('click', sumar_contador);
boton_restar.addEventListener('click', restar_contador);
boton_reset.addEventListener('click', reset_contador);

