function compararNumeros(num1, num2, num3) {
    // Determinar el mayor
    var mayor = Math.max(num1, num2, num3);
    
    // Determinar el menor
    var menor = Math.min(num1, num2, num3);
    
    // Determinar el intermedio
    var intermedio;
    if (num1 !== mayor && num1 !== menor) {
        intermedio = num1;
    } else if (num2 !== mayor && num2 !== menor) {
        intermedio = num2;
    } else {
        intermedio = num3;
    }
    
    // Devolver los resultados
    return {
        mayor: mayor,
        menor: menor,
        intermedio: intermedio
    };
}

// Ejemplo de uso
var resultado = compararNumeros(15, 30, 10);
console.log("El mayor es: " + resultado.mayor);
console.log("El menor es: " + resultado.menor);
console.log("El intermedio es: " + resultado.intermedio);
