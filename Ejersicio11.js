function contarLetras(palabra) {

    let conteoLetras = {};

    for (let i = 0; i < palabra.length; i++) {
        
        let letra = palabra[i].toUpperCase();

        if (conteoLetras[letra]) {
            conteoLetras[letra]++;
        } else { 
            conteoLetras[letra] = 1;
        }
    }

    for (let letra in conteoLetras) {
        console.log(`${letra} = ${conteoLetras[letra]}`);
    }
}

// Ingresar palabra
contarLetras("Horno");
