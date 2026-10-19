class Vehiculo {
    encender(): void{ 
        console.log("Vehiculo encendido");
    }
};

class Camioneta extends Vehiculo {
    activarDobleTraccion():void {
        console.log("Camioneta activa la traccion 4x4");
    }
};

class Deportivo extends Vehiculo {
    activarModoSport(): void{
        console.log("Deportivo activa el modo turbo sport");
    }
};

const hilux = new Camioneta();
hilux.encender();
hilux.activarDobleTraccion();
const mustang = new Deportivo();
mustang.encender();
mustang.activarModoSport();

class Mecanico {
    trabajar(): void {
        console.log("El mecanico realiza mantenimiento preventivo");
    }
}

class MecanicoRuilova extends Mecanico {
    repararMotor(): void {
        console.log("Rahi Ruilova calibra los inyectores y valvulas");
    }
}

class MecanicoElectrico extends Mecanico {
    escanearSensores(): void {
        console.log("Mecanico electrico escanea la computadora del auto");
    }
}

const mecanico = new Mecanico();
const rahi = new MecanicoRuilova();
const electrico = new MecanicoElectrico();
rahi.trabajar();
rahi.repararMotor();
electrico.escanearSensores();
electrico.trabajar();
mecanico.trabajar();
