function sumaNumerosPares(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { // Verifica si el número es par
        suma += arr[i]; // Si es par, lo suma
      }
    }
    return suma;
  }
  
  // ingresar números entre los corchetes
  const miArray = [8, 1, 2, 3, 4, 5, 6];
  console.log("Suma de números pares:", sumaNumerosPares(miArray)); // Imprime: 12 (2 + 4 + 6)
  