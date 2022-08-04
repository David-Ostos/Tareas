var edad = parseInt(prompt("¿Cuál es tu edad?"));
var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");

function salto() {
    document.write("<br><br>")
    
}
function imprimir(msj) {
    document.write(msj)
    salto()
}

if (edad >= 18 && tieneLicencia == "S") {
    imprimir("Puedes conducir");
}
else{
    imprimir("No puedes conducir");
}