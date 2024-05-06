// Definimos la lista de personas
let personas = [
    { nombre: "Juan", sexo: "Hombre", edad: 25 },
    { nombre: "María", sexo: "Mujer", edad: 30 },
    { nombre: "Carlos", sexo: "Hombre", edad: 20 },
    { nombre: "Laura", sexo: "Mujer", edad: 35 },
    { nombre: "Pedro", sexo: "Hombre", edad: 22 }
];

// Función para obtener el promedio de edades
function obtenerPromedioEdad(personas) {
    let sumaEdades = 0;
    for (let persona of personas) {
        sumaEdades += persona.edad;
    }
    return sumaEdades / personas.length;
}

// Función para obtener el nombre de la mujer con mayor edad
function obtenerNombreMujerMayorEdad(personas) {
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
function obtenerNombreHombreMenorEdad(personas) {
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
function obtenerPromedioEdadMujeres(personas) {
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

// Mostramos los resultados
console.log("Promedio de edad:", obtenerPromedioEdad(personas));
console.log("Nombre de la mujer con mayor edad:", obtenerNombreMujerMayorEdad(personas));
console.log("Nombre del hombre con menor edad:", obtenerNombreHombreMenorEdad(personas));
console.log("Promedio de edad de las mujeres:", obtenerPromedioEdadMujeres(personas));
