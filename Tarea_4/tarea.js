function salta() {

    document.write("<br><br><hr><br>")
}

//funcion para escribir y saltar las lineas mas simplificado.
function imprimir(frase) {

    document.write("<big>" + frase + "</big>");
        salta();

    }
var numeroB = 0

while (numeroB <= 100) {

    imprimir(numeroB)
    numeroB = numeroB + 2;  
    
}

imprimir("FIN");