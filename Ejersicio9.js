//ingresar los números para sumar
const lista = [8, 1, 2, 3, 4, 5, 6];

function sumaLista(num) {
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    return suma;
}

const suma = sumaLista(lista);
console.log("La suma de todos los números ingresados es:", suma);