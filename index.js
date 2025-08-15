function encenderBomba() {
    document.getElementById("lecturasNuevas").style.display = "block";
}
//lo que contiene las respuestas correctas.
let correctas = [3, 2, 3, 4, 1, 1, 3, 3, 2, 4]
//donde se guardaran las respuestas elegidas por el usuario
let opcion_elegida = [];

let cantidad_correcta = 0
//funcion que toma el num de pregunta y el imput elegido de esa pregunta.
function respuesta(num_pregunta, seleccionada) {
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;
    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs para cuando elige otra opcion
    //armo el id para seleccionar el section correspondiente
    id = "p" + num_pregunta

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundcolor = "white";
    labels[5].style.backgroundcolor = "white";
    labels[7].style.backgroundcolor = "white";
    //doy el color al label seleccionado
    seleccionada.parentNode.style.backgroundcolor = "#cecofc";
}
// funcion que compara los arreglos para saber cuantas estuvieron correctas
function corregir() {
    cantidad_correctas = 0;
    for (i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elegida[i]) {
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
}