//Condicionales

let kilometraje: number = 5000;

if (kilometraje < 5000) {
  console.log("El auto todavia no necesita cambio de aceite");
}

//Condicionales dobles
if (kilometraje >= 16000) {
  console.log("El auto necesita cambio de frenos");
} else {
  console.log("El auto no necesita cambio de frenos");
}

//Condicionales multiples

if (kilometraje >= 16000) {
  console.log("El auto necesita cambio de frenos");
} else if (kilometraje >= 8000) {
  console.log("El auto necesita cambio de aceite");
} else {
  console.log("El auto no necesita cambio de aceite ni de frenos");
}

//Condicional Anidados

if (kilometraje >= 16000) {
  console.log("El auto necesita cambio de frenos");
} else {
  if (kilometraje >= 8000) {
    console.log("El auto necesita cambio de aceite");
  } else {
    console.log("El auto no necesita cambio de aceite ni de frenos");
  }
}

//Condicional if con operador logico

kilometraje = -20;
let desgaste: number = 25;

if (kilometraje >= 8000 && kilometraje < 16000 && desgaste >= 20) {
  console.log("El auto necesita cambio de aceite");
} else if (kilometraje >= 16000) {
  console.log("El auto necesita cambio de frenos");
} else {
  console.log("El auto no necesita cambio de aceite ni de frenos");
}

//Condicional if con operador logico or

kilometraje = 5000;
desgaste = 56;

if (kilometraje >= 8000 || desgaste >= 20) {
  console.log("El auto necesita cambio de aceite");
} else if (kilometraje >= 16000) {
  console.log("El auto necesita cambio de frenos");
} else {
  console.log("El auto no necesita cambio de aceite ni de frenos");
}

type TipoVehiculo = "Sedan" | "Camioneta" | "Moto" | "Electrico";

interface Mecanico {
  nombre: string;
  edad: number;
  certificaciones: number;
  suspendido: boolean;
}

interface Vehiculo {
  modelo: string;
  tipo: TipoVehiculo;
  anio: number;
  bateria: number;
  motor: number;
  frenos: number;
}

const mecanico: Mecanico = {
  nombre: "Carlos",
  edad: 25,
  certificaciones: 8,
  suspendido: false,
};

const vehiculo: Vehiculo = {
  modelo: "Chevrolet Aveo",
  tipo: "Sedan",
  anio: 2020,
  bateria: 120,
  motor: 95,
  frenos: 78,
};

if (
  mecanico.certificaciones >= 8 &&
  mecanico.edad >= 18 &&
  !mecanico.suspendido
) {
  console.log("Mecanico autorizado");

  if (
    vehiculo.anio >= 2000 &&
    vehiculo.bateria > 0 &&
    (vehiculo.tipo === "Sedan" ||
      vehiculo.tipo === "Camioneta" ||
      vehiculo.tipo === "Electrico")
  ) {
    console.log("Vehiculo aceptado");

    if (
      vehiculo.anio >= 2018 &&
      vehiculo.motor >= 90 &&
      vehiculo.bateria >= 100
    ) {
      console.log("Servicio Completo");
    } else if (
      vehiculo.anio >= 2010 &&
      (vehiculo.motor >= 75 || vehiculo.frenos >= 80)
    ) {
      console.log("Servicio Intermedio");
    } else if (
      vehiculo.anio >= 2000 &&
      vehiculo.motor >= 50 &&
      vehiculo.bateria > 0
    ) {
      console.log("Servicio Basico");
    } else {
      console.log("Sin servicio asignado");
    }
  } else {
    console.log("El vehiculo no cumple los requisitos");
  }
} else {
  console.log("Mecanico no autorizado");
}
