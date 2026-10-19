//Ciclo for
for (let i = 0; i < 5; i++) {
    console.log(`Revision del auto: ${i}`);
}

for (let i = 2; i < 50; i+= 5) {
    console.log(`Revision del auto: ${i}`);
}

for (let i = 40; i > 0; i-= 5) {
    console.log(`Revision del auto: ${i}`);
}

for (let i = 40; i > 0; i-= 5) {
    if (i === 20) {
        console.log(`Revision del auto ha terminado`);
    } else if (i === 30) {
        console.log(`Revision del auto ha sido interrumpida`);
    }
    else {
        console.log(`Revision del auto: ${i}`);
    }
}

interface Mecanico {
    nombre: string;
    experiencia: number;
    tieneCertificado: boolean;
}

const mecanicos: Mecanico[] = [ 
    { nombre: "Rahi Ruilova", experiencia: 100, tieneCertificado: true},
    { nombre: "Carlos Perez", experiencia: 90, tieneCertificado: true},
    { nombre: "Pedro Gomez", experiencia: 80, tieneCertificado: false},
    { nombre: "Luis Morales", experiencia: 70, tieneCertificado: false},
    { nombre: "Juan Ramirez", experiencia: 120, tieneCertificado: true}
];

for (const mecanico of mecanicos) {
    console.log(`Mecanico: ${mecanico.nombre}, Experiencia: ${mecanico.experiencia}, Certificado: ${mecanico.tieneCertificado}`)
}

const repuestos: Record<string, number> = {
    "Pastillas de freno": 45,
    "Filtro de aceite": 15,
    "Bujias": 25
};
const precios: Record<string, number> = {
    "Pastillas de freno": 45,
    "Filtro de aceite": 15,
    "Bujias": 25
}
for (const repuesto in repuestos) {
    console.log(`repuesto ${repuesto}, Precio: ${precios[repuesto]} `)
}

const serviciosTaller: string[]= ["Cambio de aceite", "Alineacion", "Frenos", "Chequeo"];
serviciosTaller.forEach((servicio, index) => {
    console.log(`Servicio ${index+1}: ${servicio}`);
});

serviciosTaller.map((servicio, index) => {
    console.log(`Servicio ${index+1}: ${servicio}`);
});