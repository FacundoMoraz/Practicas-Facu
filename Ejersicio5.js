const prompt = require('prompt-sync')();
// Función para repetir una palabra un número determinado de veces
function repetirPalabra(palabra, veces) {
    var resultado = "";
    for (var i = 0; i < veces; i++) {
        resultado += palabra + " ";
    }
    return resultado.trim(); // Eliminar el espacio en blanco adicional al final
}

// Solicitar al usuario que ingrese una palabra y la cantidad de veces que se repetirá
var palabra = prompt("Ingresa una palabra:");
var veces = parseInt(prompt("Ingresa la cantidad de veces que deseas repetir la palabra:"));

// Verificar si el usuario ingresó un número válido
if (isNaN(veces) || veces < 1) {
    console.log("Por favor, ingresa un número válido mayor que cero.");
} else {
    // Repetir la palabra y mostrar el resultado
    var resultado = repetirPalabra(palabra, veces);
    console.log("El resultado es: " + resultado);
}
