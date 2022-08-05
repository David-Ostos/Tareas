
    var ingredientes = [];
    var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
    var contador = 1;

    while( contador <= cantidad) {
        
        var ingrediente = prompt("Informe el ingrediente " + contador);
        var repetidos = false;
        
        for(var repetido=0; repetido < ingredientes.length; repetido++){
            if(ingrediente == ingredientes[repetido]){
                repetidos = true;
                alert("ingrediente repetido")
                break;

            }

        } 
        
        if(repetidos == false){
                ingredientes.push(ingrediente);
             contador++;
        }
    }

    console.log(ingredientes);