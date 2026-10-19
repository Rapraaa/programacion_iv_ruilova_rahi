let presionLlantas = 20; 
let presionLlantasMaxima = 32;

while (presionLlantas < presionLlantasMaxima) {
    console.log("Presion de la llanta", presionLlantas);
    presionLlantas += 4;
};

let nivel = 1;
while (nivel <= 10) {
    console.log("Auto revisado en el taller", nivel);
    nivel++;
};

let revisionesFrenos = 0;
let frenosAprobados = 0;

while (revisionesFrenos < 10) {
    revisionesFrenos++
    let aprobado = Math.random() < 0.5;
    if (aprobado) {
        frenosAprobados++;
        console.log(`Revision ${revisionesFrenos}: Aprobado!, total de aprobados: ${frenosAprobados}`);
    } else {
        console.log(`Revision ${revisionesFrenos}: Requiere ajuste!, total de aprobados: ${frenosAprobados}`);
    }
}

let mantenimientos = 0;
do {
    mantenimientos++
    console.log(`Mantenimiento numero: ${mantenimientos}`);
} while (mantenimientos < 5);

interface Vehiculo {
    modelo: string;
    tipo: string;
    kilometraje: number;
}
const vehiculosEnTaller: Vehiculo[] = [
    { modelo: "Toyota Hilux", tipo: "Camioneta", kilometraje: 150000 },
    { modelo: "Chevrolet Sail", tipo: "Sedan", kilometraje: 45000 },
    { modelo: "Kia Sportage", tipo: "SUV", kilometraje: 80000 },
    { modelo: "Hyundai Accent", tipo: "Sedan", kilometraje: 120000 },
    { modelo: "Ford F-150", tipo: "Camioneta", kilometraje: 30000 }
];

let indice = 0;
while (indice < vehiculosEnTaller.length) {
    const auto = vehiculosEnTaller[indice];
    if (auto?.tipo === "Sedan") {
        indice++;
        continue;
    }
    if (auto?.kilometraje < 50000) {
        break;
    }
    console.log(`Vehiculo: ${auto.modelo}, Tipo: ${auto.tipo}, Kilometraje: ${auto.kilometraje}`);
    indice++;
}
