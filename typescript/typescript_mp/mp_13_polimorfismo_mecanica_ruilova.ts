class Vehiculo {
    realizarServicio(): void{ 
        console.log("Servicio de revision basica");
    }
};

class Sedan extends Vehiculo {
    override realizarServicio():void {
        console.log("Sedan: Cambio de aceite de motor y filtro de aire");
    }
};

class Camioneta extends Vehiculo {
    override realizarServicio(): void{
        console.log("Camioneta: Cambio de amortiguadores y engrase de suspension");
    }
};

const vehiculosTaller: Vehiculo[]=[
    new Sedan(),
    new Camioneta()
]

vehiculosTaller.forEach(vehiculo=>vehiculo.realizarServicio());
