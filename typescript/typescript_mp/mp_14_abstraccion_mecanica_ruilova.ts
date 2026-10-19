abstract class Mecanico {
    abstract trabajar(): void;
    descansar(): void{
        console.log("El mecanico se toma un descanso con un cafe")
    }
};

class MecanicoRuilova extends Mecanico{
    trabajar(): void {
        console.log("Rahi Ruilova repara el sistema de frenos y suspension")
    }
}

class AyudanteTaller extends Mecanico{
    trabajar(): void {
        console.log("El ayudante cambia el aceite y limpia el puesto")
    }
}

const mecanicos: Mecanico[]=[
    new MecanicoRuilova(),
    new AyudanteTaller()
]

console.log(mecanicos);
mecanicos.forEach(mecanico=>mecanico.trabajar());


//Ejercicio taller
abstract class MaquinaTaller{
    abstract operar(): void;
    calibrar(): void {
        console.log("Calibrando sensores de la maquina");
    }
}

class ElevadorHidraulico extends MaquinaTaller{
    operar(): void {
        console.log("Elevando vehiculo para revision por debajo");
    }
}

class AlineadoraLaser extends MaquinaTaller{
    operar(): void {
        console.log("Alineando la direccion y convergencia de las llantas");
    }
}

const maquinas: MaquinaTaller[]=[
    new ElevadorHidraulico(),
    new AlineadoraLaser()
]

console.log(maquinas);
maquinas.forEach(maquina=>maquina.operar());
