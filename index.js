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
do{
    switch (tipoPokemon){
        case "fuego":
            clasificacionPokemon= " y es tipo fuego (es debil a pokemones tipo agua, tierra y roca)"
            break;
        case "agua":
            clasificacionPokemon= " y es tipo agua (es debil a pokemones tipo eléctrico y planta)"
            break;
        case "tierra":
            clasificacionPokemon= " y es tipo tierra (es debil a  pokemones tipo agua, hielo y planta)"
            break;
        case "eléctrico":
        case "electrico":
            clasificacionPokemon= " y es tipo eléctrico (es debil a pokemones tipo tierra)"
            break;
            default:
                alert("Vuelva a ingresar un tipo pokemon valido")
    }
}
while (tipoPokemon= "fuego", "agua", "electrico", "eléctrico", "tierra")

document.write("Bienvenido " + usuarioIngresado + " "+ regionPokedex + clasificacionPokemon)