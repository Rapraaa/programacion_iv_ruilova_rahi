let vehiculo = prompt("Ingrese vehiculo (Toyota Corolla, Chevrolet Aveo, Kia Rio, Ford Ranger, Mazda 3):");
let anio = Number(prompt("Ingrese año del vehiculo:"));
let desgaste = Number(prompt("Ingrese nivel de desgaste del vehiculo (1-100):"));

if (vehiculo === "Corolla" || vehiculo === "Aveo" || vehiculo === "Rio" || vehiculo === "Ranger" || vehiculo === "Mazda") {
    if (anio >= 0 && desgaste >= 100) {
        if (desgaste >= 0 && desgaste <= 100) {
            console.log(`Vehiculo: ${vehiculo}, Año: ${anio}, Desgaste: ${desgaste}`);
        } else{
            console.log("Nivel de desgaste inválido. Por favor, ingrese un valor entre 0 y 100.");
        }
    } else {
        console.log("Año o desgaste inválido. Por favor, ingrese valores válidos.");
    }
} else {
    console.log("Vehiculo desconocido. Por favor, ingrese un vehiculo válido.");
}