function obtenerDivisores(minimo, maximo, divisor) {
    let divisores = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

// Ejemplo de uso
let min = 1;
let max = 20;
let div = 3;
let listaDivisores = obtenerDivisores(min, max, div);
console.log("Divisores de", div, "entre", min, "y", max, ":", listaDivisores);
