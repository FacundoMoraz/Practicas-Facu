const prompt = require('prompt-sync')();
// Función para determinar si un número es par o impar
function verificarParidad(numero) {
    if(numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Solicitar al usuario que ingrese un número
var numeroUsuario = parseInt(prompt("Ingresa un número:"));

// Verificar si el número ingresado es par o impar
var paridad = verificarParidad(numeroUsuario);

// Mostrar el resultado en la consola
console.log("El número ingresado es " + paridad + ".");
