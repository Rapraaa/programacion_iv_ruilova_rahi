type Servicio =
| "Cambio de aceite"
| "Alineacion"
| "Frenos"
| "Diagnostico"
| "Pintura"

let servicio: Servicio = "Frenos";

switch (servicio) {
    case "Cambio de aceite":
        console.log("El cambio de aceite cuesta $25");
        break;
    case "Alineacion":
        console.log("La alineacion cuesta $20");
        break;
    case "Frenos":
        console.log("El cambio de frenos cuesta $60");
        break;
    case "Diagnostico":
        console.log("El diagnostico cuesta $15");
        break;
    case "Pintura":
        console.log("La pintura cuesta $300");
        break;
    default:
        console.log("Servicio desconocido");
}

type Mecanicos = "Carlos" | "Pedro" | "Luis";

let mecanico: Mecanicos = "Carlos";
let experiencia: number = 100;
let tieneHerramientas: boolean = true;

switch (mecanico) {
    case 'Carlos':
        if (experiencia > 80 && tieneHerramientas) {
            console.log("Carlos es un mecanico experto");
        } else {
            console.log("Carlos no es un mecanico experto");
        }
        break;
    case 'Pedro':
        if (experiencia > 70 && tieneHerramientas) {
            console.log("Pedro es un mecanico con experiencia");
        } else {
            console.log("Pedro no es un mecanico experto");
        }
        break;
    case 'Luis':
        if (experiencia > 90 && tieneHerramientas) {
            console.log("Luis es el jefe de taller");
        } else {
            console.log("Luis no es un mecanico experto");
        }
        break;
    default:
        console.log("Mecanico desconocido");
}