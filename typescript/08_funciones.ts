//Funciones simples
//Devolviendo un valor
function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
};

const totalCreditos: number = sumarCreditos(10, 20);
console.log(`Total de creditos: ${totalCreditos}`);

// Sin devolver un valor

function mostrarCentroDeEntrenamiendo(nombre: string) : void {
    console.log(`Centro de entrenamiento: ${nombre}`);
};

mostrarCentroDeEntrenamiendo("Academia los pepitos jedai");

//Funciomes con parametros opcionales

function entrenarJedi(nombre: string, nivel?:number): void {
    if (nivel) {
        console.log(`El jedi ${nombre} esta en el nivel ${nivel}.`);

    } else {
        console.log(`El jedi ${nombre} esta entrenando.`);
    }
};

entrenarJedi("El pepe", 7);
entrenarJedi('etesech');

// FUNCIONES FLECHA
function potenciarFuerza(fuerza: number) : number {
    return fuerza * 2;
};

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza*2;

const FuerzaOriginal: number = 10;
const FuerzaPotenciada: number = potenciarFuerza(FuerzaOriginal);
console.log(`Fuerza original: ${FuerzaOriginal}, Fuerza potenciada ${FuerzaPotenciada}.`)
const FuerzaPotenciadaFlecha: number = potenciarFuerzaFlecha(FuerzaOriginal);
console.log(`Fuerza original: ${FuerzaOriginal}, Fuerza potenciada ${FuerzaPotenciadaFlecha}.`)