let usuarioIngresado= prompt("Ingrese su nombre de entrenador pokemon ");

let numeroPokedex=prompt("Ingrese un número para verificar la region de su pokemon (del 1 al 386)");
    if(numeroPokedex>=387){
    alert("Todavia no desbloqueo los pokemones de esta región");
    }else if(numeroPokedex>=1 && numeroPokedex<=151){
        const regionKanto= "su pokemon pertenece a la región de kanto"
        regionPokedex= regionKanto
    }else if(numeroPokedex>=152 && numeroPokedex<=251){
        const regionJotho= "su pokemon pertenece a la región de Jotho"
        regionPokedex= regionJotho
    }else if(numeroPokedex>=252 && numeroPokedex<=386){
        const regionHoenn= "su pokemon pertenece a la región de Hoenn"
        regionPokedex= regionHoenn
    }else if (numeroPokedex%1 != 0 || numeroPokedex!=1234567890){
        alert("error: debe ingresar un número");
    }

let tipoPokemon= prompt ("¿Su pokemon es fuego, agua, tierra o eléctrico?")
    switch (tipoPokemon){
        case "fuego":
            let fuegoTipo= " y es tipo fuego (es debil a pokemones tipo agua, tierra y roca)"
            clasificacionPokemon=fuegoTipo
            break;
        case "agua":
            let aguaTipo= " y es tipo agua (es debil a pokemones tipo eléctrico y planta)"
            clasificacionPokemon=aguaTipo
            break;
        case "tierra":
            let tierraTipo= " y es tipo tierra (es debil a  pokemones tipo agua, hielo y planta)"
            clasificacionPokemon=tierraTipo
            break;
        case "eléctrico":
        case "electrico":
            let electricoTipo= " y es tipo eléctrico (es debil a pokemones tipo tierra)"
            clasificacionPokemon=electricoTipo
            break;
}
for (var i = 0; i < 5; i++){
document.write("Bienvenido " + usuarioIngresado + " "+ regionPokedex + clasificacionPokemon)
}