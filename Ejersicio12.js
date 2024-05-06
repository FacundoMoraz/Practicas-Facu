// Lista de personas
let personas = [
    { nombre: "Juan", sexo: "Hombre", edad: 25 },
    { nombre: "María", sexo: "Mujer", edad: 30 },
    { nombre: "Carlos", sexo: "Hombre", edad: 25 },
    { nombre: "Laura", sexo: "Mujer", edad: 35 },
    { nombre: "Pedro", sexo: "Hombre", edad: 22 }
];

// promedio de edades
function promedioEdad(personas) {
    let sumaEdades = 0;
    for (let persona of personas) {
        sumaEdades += persona.edad;
    }
    return sumaEdades / personas.length;
}

// Función para obtener el nombre de la mujer con mayor edad
function mujerMayorEdad(personas) {
    let mayorEdad = 0;
    let nombreMujerMayorEdad = "";
    for (let persona of personas) {
        if (persona.sexo === "Mujer" && persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMujerMayorEdad = persona.nombre;
        }
    }
    return nombreMujerMayorEdad;
}

// Función para obtener el nombre del hombre con menor edad
function hombreMenorEdad(personas) {
    let menorEdad = Infinity;
    let nombreHombreMenorEdad = "";
    for (let persona of personas) {
        if (persona.sexo === "Hombre" && persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreHombreMenorEdad = persona.nombre;
        }
    }
    return nombreHombreMenorEdad;
}

// Función para obtener el promedio de edad de las mujeres
function promedioEdadMujeres(personas) {
    let sumaEdadesMujeres = 0;
    let contadorMujeres = 0;
    for (let persona of personas) {
        if (persona.sexo === "Mujer") {
            sumaEdadesMujeres += persona.edad;
            contadorMujeres++;
        }
    }
    return sumaEdadesMujeres / contadorMujeres;
}

// Calculamos y mostramos los resultados
console.log("Promedio de edad:", promedioEdad(personas));
console.log("Nombre de la mujer con mayor edad:", mujerMayorEdad(personas));
console.log("Nombre del hombre con menor edad:", hombreMenorEdad(personas));
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres(personas));
