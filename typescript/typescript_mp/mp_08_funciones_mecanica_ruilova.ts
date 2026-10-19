//Funciones simples
//Devolviendo un valor
function sumarCostos(costo1: number, costo2: number): number {
    return costo1 + costo2;
};

const totalCostos: number = sumarCostos(10, 20);
console.log(`Total de costos: ${totalCostos}`);

// Sin devolver un valor

function mostrarTaller(nombre: string) : void {
    console.log(`Taller mecanico: ${nombre}`);
};

mostrarTaller("Taller Mecanico Ruilova");

//Funciomes con parametros opcionales

function afinarVehiculo(modelo: string, fase?:number): void {
    if (fase) {
        console.log(`El vehiculo ${modelo} esta en la fase ${fase} de afinamiento.`);

    } else {
        console.log(`El vehiculo ${modelo} esta en afinamiento.`);
    }
};

afinarVehiculo("D-Max", 2);
afinarVehiculo('Sail');

// FUNCIONES FLECHA
function potenciarMotor(caballos: number) : number {
    return caballos * 2;
};

const potenciarMotorFlecha = (caballos: number): number => caballos*2;

const PotenciaOriginal: number = 100;
const PotenciaAumentada: number = potenciarMotor(PotenciaOriginal);
console.log(`Potencia original: ${PotenciaOriginal}, Potencia aumentada ${PotenciaAumentada}.`)
const PotenciaAumentadaFlecha: number = potenciarMotorFlecha(PotenciaOriginal);
console.log(`Potencia original: ${PotenciaOriginal}, Potencia aumentada ${PotenciaAumentadaFlecha}.`)
