
    var inicioDeSesionRegistrado = "alura";
    var contrasenhaRegistrada = "alura321";

    for (var contador = 1; contador <= 3; contador++){

        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");

         if( inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada ) {
            
            alert("Bienvenido al sistema " + inicioDeSesionIngresado);
            break;

        } else {
            if(contador ==3){
                alert("Agotaste el numero de intentos!!")
            } else{

                alert("inicio de sesión inválido. Favor intente de nuevo");
            }
        }
    }