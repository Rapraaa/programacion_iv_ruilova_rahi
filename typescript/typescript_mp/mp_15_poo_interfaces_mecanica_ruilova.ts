interface ServicioTaller {
    nombre: string;
    precio: number;
    realizarServicio(): void;
}

class CambioAceite implements ServicioTaller {
    nombre = "Cambio de aceite";
    precio = 25.50;
    realizarServicio(): void {
        console.log("Rahi Ruilova drena el aceite viejo y pone aceite nuevo")
    }
}

class Alineacion implements ServicioTaller {
    nombre = "Alineacion y balanceo";
    precio = 30;
    realizarServicio(): void {
        console.log("Rahi Ruilova alinea las llantas del vehiculo")
    }
}

const cambioAceite = new CambioAceite();
const alineacion = new Alineacion();

cambioAceite.realizarServicio();
alineacion.realizarServicio();
console.log(cambioAceite.nombre, "$", cambioAceite.precio);
console.log(alineacion.nombre, "$", alineacion.precio);
