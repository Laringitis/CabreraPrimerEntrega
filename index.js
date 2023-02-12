let usuarioIngresado= prompt("Ingrese su nombre de entrenador pokemon ");

let numeroPokedex=prompt("Ingrese el numero de pokedex de su pokemon del 1 al 386");
    if(numeroPokedex>=1 && numeroPokedex<=151){
            const regionKanto= "su pokemon pertenece a la región de kanto"
            regionPokedex= regionKanto
        }else if(numeroPokedex>=152 && numeroPokedex<=251){
            const regionJotho= "su pokemon pertenece a la región de Jotho"
            regionPokedex= regionJotho
        }else if(numeroPokedex>=252 && numeroPokedex<=386){
            const regionHoenn= "su pokemon pertenece a la región de Hoenn"
            regionPokedex= regionHoenn
        }else if(numeroPokedex>=387){
            alert("Todavia no desbloqueo los pokemones de esta región, vuelva a intentar");
        }else if (numeroPokedex%1 != 0 || numeroPokedex!=1234567890){
            alert("error: debe ingresar un número");
        }

document.write("Bienvenido "+usuarioIngresado+ " "+regionPokedex)
