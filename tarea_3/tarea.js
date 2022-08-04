var eD = (2022-1995);
var eP = (2022-1953);
var total = eP-eD;

function salto() {
    document.write("<br><br>")
    
}
function imprimir(msj) {
    document.write(msj)
    salto()
}

document.write("<h3>Cual es la diferencia de edad entre mi papá y yo?</h3>")

imprimir("Si mi papá nacio en el año 53 y yo en el 95")

imprimir("La diferencia de edad entre mi papá y yo es de " + total + " años")