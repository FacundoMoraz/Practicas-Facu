// cambiar la palabra acá
var palabra = "moraleja";

// Función para contar la cantidad de letras en una palabra
function contarLetras(palabra) {
    
    palabra = palabra.trim();
    
    var cantidad = palabra.length;
    
    // Devolver el resultado
    return cantidad;
}

// Contar la cantidad de letras en la palabra
var cantidadLetras = contarLetras(palabra);

// Mostrar el resultado en la consola
console.log("La palabra '" + palabra + "' tiene " + cantidadLetras + " letras.");
